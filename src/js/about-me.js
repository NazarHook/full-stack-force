'use strict';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const acc = document.getElementsByClassName('accordion');

const accBtn = document.querySelector('#acc-btn')

accBtn.addEventListener('click', ()=>{
  accBtn.classList.toggle('active-btn')
});

const accBtn2 = document.querySelector('#acc-btn2')

accBtn2.addEventListener('click', ()=>{
  accBtn2.classList.toggle('active-btn')
});
const accBtn3 = document.querySelector('#acc-btn3')

accBtn3.addEventListener('click', ()=>{
  accBtn3.classList.toggle('active-btn')
});

// function open() {
//   accBtn.classList.toggle('active-btn')
// }
// accBtn.addEventListener("click", open);




new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.button-next',
  },
  loop: true,
  keyboard: true,
  mousewheel: true,
  slidesPerView: 2,
  speed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
  slideActiveClass: 'selected',
});
