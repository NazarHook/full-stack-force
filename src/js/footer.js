'use strict';
const input = document.querySelector('.js-input');
let maxInputNumber = input.maxLength;

input.addEventListener('input', sliceText);
 maxInputNumber = input.maxLength;

function sliceText() {
  if (input.value.length >= maxInputNumber) {
    input.value = input.value.slice(0, maxInputNumber - 3) + '...';
  }
}