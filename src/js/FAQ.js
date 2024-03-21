'use strict';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordions = Array.from(
  document.querySelectorAll('.accordion-container')
);
new Accordion(accordions, {
  showMultiple: true,
});

const accBtn = document.querySelectorAll('.more-btn');

for (let i = 0; i < accBtn.length; i++) {
  accBtn[i].addEventListener('click', function () {
    this.classList.toggle('active-btn');
  });
}