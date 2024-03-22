'use strict';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import xIcon from '../images/icons/sprite.svg'
console.log(xIcon);
const inputCommit = document.querySelector('.js-inputCommit');
const localStorageKey = 'feedback-form-state';
const formFeedback = document.querySelector('.js-form');
const footerBtn = document.querySelector('.js-footerBtn');
const inputEmail = document.querySelector('.js-inputEmail');
const listTextMessage = document.querySelector('.js-status-text');
const statusTextInput = document.querySelector('.js-status-text');
const dalay = 1500;
let maxInputNumber = null;

inputCommit.addEventListener('input', onSliceText);
window.addEventListener('load', setFormValuesFromLocalStorage);
formFeedback.addEventListener('input', onInputForm);
formFeedback.addEventListener('submit', onSubmitForm);
// footerBtn.addEventListener('click', onClickSubmitForm);

function onSliceText() {
  switch (Number(inputCommit.clientWidth)) {
    case 343:
      maxInputNumber = 40;
      break;
    case 245:
      maxInputNumber = 30;
      break;
    default:
      maxInputNumber = 55;
      break;
  }

  if (inputCommit.value.length >= maxInputNumber) {
    return (inputCommit.value =
      inputCommit.value.slice(0, maxInputNumber - 3) + '...');
  }
}

function setFormValuesFromLocalStorage() {
  const savedFormState = JSON.parse(localStorage.getItem(localStorageKey));
  if (savedFormState) {
    formFeedback.elements.email.value = savedFormState.email ?? '';
    formFeedback.elements.message.value = savedFormState.message ?? '';
  }

  statusBtn();
}

function onInputForm(e) {
  const formElement = e.currentTarget.elements;
  const inputEmail = formElement.email.value.trim();
  const textareaMessage = formElement.message.value.trim();

  const valueForm = {
    email: inputEmail,
    message: textareaMessage,
  };

  localStorage.setItem(localStorageKey, JSON.stringify(valueForm));

  validateInputEmail();
  setTimeout(() => {
    listTextMessage.style.display = 'none';
  }, dalay);

  statusBtn();
}

function onSubmitForm(e) {
  e.preventDefault();

  const email = formFeedback.elements.email.value.trim();
  const message = formFeedback.elements.message.value.trim();

  const formData = {
    email: email,
    comment: message,
  };

  postAPi(formData)
    .then(data => {
      const { message, title } = data;
      const instance = basicLightbox.create(
        `<div class="footer-modal"><h2 class="footer-title-modal">${title}</h2><p class="footer-text-modal">${message}</p><button class="footer-button-modal js-closeModal"><svg width="11" height="11" class="close-button-svg"><use href="${xIcon}#icon-close-x"></use></svg></button></div>`
      );
      instance.show();

      statusBtn();
      document.body.classList.add('modal-open');

      inputEmail.style.borderBottom = '1px solid rgba(250, 250, 250, 0.2)';

      const closeModalButton = instance
        .element()
        .querySelector('.js-closeModal');
      closeModalButton.addEventListener('click', () => {
        instance.close();
        closeModal();
      });

      document.addEventListener('keyup', event => {
        if (event.key === 'Escape') {
          instance.close();
          closeModal();
        }
      });

      instance.element().addEventListener('click', event => {
        if (event.target === instance.element()) {
          instance.close();
          closeModal();
        }
      });
    })
    .catch(errorSearch)
    .finally(() => {
      formFeedback.reset();
      localStorage.removeItem(localStorageKey);
      footerBtn.disabled = true;
    });
}

function statusBtn() {
  const inputEmail = formFeedback.elements.email.value.trim();
  const textareaMessage = formFeedback.elements.message.value.trim();
  if (inputEmail && textareaMessage) {
    footerBtn.disabled = false;
  } else {
    footerBtn.disabled = true;
  }
}

function validateInputEmail() {
  const isValid = inputEmail.checkValidity();

  if (!inputEmail.value) {
    inputEmail.style.borderBottom = '1px solid rgba(250, 250, 250, 0.2)';
    return;
  }

  if (isValid) {
    listTextMessage.style.display = 'block';
    listTextMessage.style.color = '#3CBC81';
    listTextMessage.textContent = 'Succes!';

    inputEmail.style.borderBottom = '1px solid #3CBC81';
  } else {
    listTextMessage.style.display = 'block';
    listTextMessage.style.color = '#E74A3B';
    listTextMessage.textContent = 'Invalid email, try again';

    inputEmail.style.borderBottom = '1px solid #E74A3B';
  }
}

// API POST
axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';
const ENDPOINT = 'https://portfolio-js.b.goit.study/api/requests';

async function postAPi(formData) {
  const response = await axios.post('/requests', formData);
  return response.data;
}

function errorSearch(err) {
  iziToast.error({
    position: 'topRight',
    title: 'Error',
    message: 'Sorry, your request cannot be processed. Please try again!',
  });
}

function closeModal() {
  document.body.classList.remove('modal-open');
}
