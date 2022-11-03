var menu = document.querySelector(".menu");
var menuClose = document.querySelector(".menu-close");
var navbar = document.querySelector(".navbar");
var body = document.querySelector("body");
var features = document.querySelector(".features");
var company = document.querySelector(".company");

menu.addEventListener("click", function () {
  menu.classList.toggle("hide");
  navbar.classList.toggle("open");
  menuClose.classList.toggle("show");
  body.classList.toggle("body-dark");
});

menuClose.addEventListener("click", function () {
  body.classList.remove("body-dark");
  menu.classList.remove("hide");
  navbar.classList.remove("open");
  menuClose.classList.remove("show");
});

features.addEventListener("click", function () {
  features.classList.toggle("active");
});

company.addEventListener("click", function () {
  company.classList.toggle("active");
});
window.onscroll = () => {
  navbar.classList.remove("open");
  body.classList.remove("body-dark");
  menuClose.classList.remove("show");
  menu.classList.remove("hide");
};
