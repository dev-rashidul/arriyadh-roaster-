// JavaScript for Responsive Menu

const menu = document.querySelector(".ezdan-main-nav");
const bar = document.querySelector("#bar");
const cross = document.querySelector("#cross");

bar.addEventListener("click", () => {
  menu.classList.add("active");
});

cross.addEventListener("click", () => {
  menu.classList.remove("active");
});

// // JavaScript For Sticky Header

// window.addEventListener("scroll", function () {
//   const header = document.querySelector(".ezdan-navigation-wrapper");
//   header.classList.toggle("sticky", window.scrollY > 100);
// });

// Home Hero Slider JavaScript

$(".ezdan-hero-slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  rtl: true,
  items: 1,
  autoplay: true,
  autoplayTimeout: 3000,
  navText: [
    '<i class="fa-solid fa-chevron-right"></i>',
    '<i class="fa-solid fa-chevron-left"></i>',
  ],
});