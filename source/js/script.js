"use strict";

const navToggle = document.querySelector(`.main-nav__toggle`);
const navList = document.querySelector(`.main-nav__list`);

document.addEventListener(`DOMContentLoaded`, () => {
  navToggle.classList.remove("main-nav__toggle_closed"),
  navList.classList.add("site-list__list_invisible")
});

navToggle.addEventListener(`click`, () => {
  if (navToggle.classList.contains("main-nav__toggle_closed")) {
    navToggle.classList.remove("main-nav__toggle_closed");
    navList.classList.add("site-list__list_invisible");
  } else {
    navToggle.classList.add("main-nav__toggle_closed");
    navList.classList.remove("site-list__list_invisible");
  }
});
