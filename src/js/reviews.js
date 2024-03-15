'use strict';
import axios from 'axios';
import Swiper from 'swiper';

const BASE_URI = 'https://portfolio-js.b.goit.study/api/reviews';

const reviews = await getReviewsFromServer();
const galleryMarkup = createGalleryMarkup(reviews);

document.getElementById('gallery').innerHTML = galleryMarkup;

async function getReviewsFromServer() {
  try {
    const response = await axios.get(BASE_URI);
    const data = response.data;
    console.log('Received reviews from server:', data);
    return data;
  } catch (error) {
    console.error('Error while fetching reviews:', error.message);
    throw error;
  }
}

function createGalleryMarkup(data) {
  return `
    <div class="swiper">
        <p class="review-top">REVIEWS</p>
      <div id = "swiper-wrapper" class="swiper-wrapper">
        ${data
          .map(
            ({ author, avatar_url, review }) => `
          <div class="swiper-slide">
            <div class="gallery-item">
              <img src="${avatar_url}" class="gallery-image" alt="${author}"/>
                <div class="author">${author}</div>
              <p class="review">${review}</p>
            </div>
          </div>
          `
          )
          .join('')}
            </div>
            <div class= "swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
    </div>
    `;
}

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  spaceBetween: 20,
});
