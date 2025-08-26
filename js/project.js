const swiper = new Swiper(".myProjectsSwiper", {
  loop: false,
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: { slidesPerView: 3 },
    900: { slidesPerView: 2 },
    600: { slidesPerView: 1 },
  },
});
