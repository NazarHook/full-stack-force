
const projectsSwiper = new Swiper('.projects-swiper', {
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    spaceBetween: 35,
    navigation: {
        nextEl: '.next-project-btn',
        prevEl: '.prev-project-btn',
    },
});