let swiper1 = new Swiper(".mySwiper1", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

let swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: "auto",
  spaceBetween: 10,
  grid: {
    rows: 2,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1280: {
      slidesPerView: "auto",
      spaceBetween: 30,
    },
  },
});

let swiper = new Swiper(".mySwiper3", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
