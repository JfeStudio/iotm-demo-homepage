// setting slider
const slider = new Swiper(".slider", {
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// menu toggle

const scrollNav = document.querySelector(".fixed");
window.addEventListener("scroll", () => {
  scrollNav.classList.toggle("header-fixed", this.scrollY > 0);
});

// menu toggle /  hamburger
const navigation = document.querySelector("#navigation");
const btnToggle = document.querySelector(".menu-hamburger");
const icon = document.querySelector(".bx-menu-alt-right");

btnToggle.addEventListener("click", () => {
  const visability = navigation.getAttribute("data-visible");
  icon.classList.toggle("bx-x");

  if (visability === "false") {
    navigation.setAttribute("data-visible", true);
  } else if (visability === "true") {
    navigation.setAttribute("data-visible", false);
  }
});

// reload browser

const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  window.location.reload();
});
