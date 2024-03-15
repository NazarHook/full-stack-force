'use strict'
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
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
  centeredSlides: true,

    speed:1000,
  breakpoints: {
    320: {
      slidesPerView: 2
    },
    786: {
      slidesPerView: 3
    },
    1140: {
      slidesPerView: 6,
    }
  },
  slideActiveClass: 'selected',

});

