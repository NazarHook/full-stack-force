'use strict';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const acc = document.getElementsByClassName('accordion');

const accBtn = document.querySelectorAll('.ac-trigger');

for (let i = 0; i < accBtn.length; i++) {
  accBtn[i].addEventListener('click', function () {
    this.classList.toggle('active-btn');
  });
}







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
