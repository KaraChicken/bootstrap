// Swiper
let mySwiper = new Swiper("#swiper01", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // 分頁
  pagination: {
    el: ".swiper-pagination",
  },

  // 導覽箭頭
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

let mySwiper02 = new Swiper("#swiper02", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // 分頁
  pagination: {
    el: ".swiper-pagination",
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  autoplay: {
    delay: '3000',
    pauseOnMouseEnter: true
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
});

let mySwiper03 = new Swiper("#swiper03", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // 分頁
  pagination: {
    el: ".swiper-pagination",
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  autoplay: {
    delay: '2000',
    pauseOnMouseEnter: true
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 50,
    }
  },
});