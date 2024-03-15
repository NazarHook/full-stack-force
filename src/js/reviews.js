import axios from 'axios';
import Swiper from 'swiper';
console.log('hello');

const BASE_URI = 'https://portfolio-js.b.goit.study/api/reviews';
const gallery = document.querySelector('.gallery');

async function getReviewsFromServer() {
  try {
    const { data } = await axios.get(BASE_URI);

    gallery.innerHTML = `<div class="swiper mySwiper">
    <div class="swiper-wrapper">
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
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>`;

    new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } catch (error) {
    console.error('Error while fetching reviews:', error.message);
    throw error;
  }
}
getReviewsFromServer();
