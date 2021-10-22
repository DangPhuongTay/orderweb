let btn = document.querySelector(".btn");
let nav = document.querySelector("nav");
let main = document.querySelector("main");
let body = document.querySelector("body");

btn.onclick = function () {
  nav.classList.toggle("active");
  main.classList.toggle("active");
  body.classList.toggle("active");
};
