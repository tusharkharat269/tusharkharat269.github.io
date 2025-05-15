'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const navToggleBtn = document.querySelector(".nav-toggle-btn");
  const menuIcon = navToggleBtn.querySelector(".menu-icon");
  const closeIcon = navToggleBtn.querySelector(".close-icon");

  navToggleBtn.addEventListener("click", () => {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });

    const navLinks = document.querySelectorAll(".navbar-link");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      header.classList.remove("nav-active");
      navToggleBtn.classList.remove("active");
    });
  });
});

/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});