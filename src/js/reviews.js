import axios from 'axios';

const BASE_URI = 'https://portfolio-js.b.goit.study/api/reviews';
const gallery = document.querySelector('.gallery');

async function getReviewsFromServer() {
  try {
    const { data } = await axios.get(BASE_URI);

    gallery.innerHTML = `<div class="swiper mySwiper">
      <p class = "review">REVIEW</p>
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
    <div><button id = "swiper-button-next" class="swiper-button-next">
    <svg>
    <use href="./images/icons/sprite.svg#icon-arrow-right"></use>
    </svg>
</button></div>

    <div><button id = "swiper-button-prev" class="swiper-button-prev">
  <svg>
    <use href="./images/icons/sprite.svg#icon-arrow-left"></use>
  </svg>
</button></div>

  </div>`;

    new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 16,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      keyboard: true,
      mousewheel: true,
      slidesPerView: 1,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },

        1440: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      },
    });
  } catch (error) {
    console.error('Error while fetching reviews:', error.message);
    throw error;
  }
}
getReviewsFromServer();
