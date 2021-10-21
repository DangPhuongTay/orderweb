$(document).ready(function () {
  // Scroll
  $("a").click(function (event) {
    $("html,body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      500
    );
    event.preventDefault();
  });
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 50,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
