'use strict';

const input = document.querySelector('.js-input');
let maxInputNumber = null;

input.addEventListener('input', sliceText);

function sliceText() {
  switch (Number(input.clientWidth)) {
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

  if (input.value.length >= maxInputNumber) {
    return (input.value = input.value.slice(0, maxInputNumber - 3) + '...');
  }
}

// !!!!!!!!!!!!!!!!!

const localStorageKey = 'feedback-form-state';
const formFeedback = document.querySelector('.js-form');
const footerBtn = document.querySelector('.js-footerBtn');
const inputEmail = document.querySelector('.js-inputEmail');
const listTextMessage = document.querySelector('.js-status-text');
const statusTextInput = document.querySelector('.js-status-text');
const dalay = 1500;

window.addEventListener('load', setFormValuesFromLocalStorage);
formFeedback.addEventListener('input', onInputForm);
formFeedback.addEventListener('submit', onSubmitForm);
footerBtn.addEventListener('click', onClickSubmitForm);

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

  statusBtn();
}

function onSubmitForm(e) {
  e.preventDefault();

  localStorage.removeItem(localStorageKey);

  formFeedback.reset();

  statusBtn();
}

function onClickSubmitForm() {
  validateInputEmail();
  setTimeout(() => {
    listTextMessage.style.display = 'none';
  }, dalay);
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

  if (isValid) {
    listTextMessage.style.display = 'block';
    listTextMessage.style.color = '#3CBC81';
    listTextMessage.textContent = 'Succes!';

    inputEmail.style.borderBottom = '1px solid #3CBC81';

    setTimeout(() => {
      inputEmail.style.borderBottom = '1px solid rgba(250, 250, 250, 0.2)';
    }, dalay);
  } else {
    listTextMessage.style.display = 'block';
    listTextMessage.style.color = '#E74A3B';
    listTextMessage.textContent = 'Invalid email, try again';

    inputEmail.style.borderBottom = '1px solid #E74A3B';
  }
}
