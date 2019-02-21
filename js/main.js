const init = () => {
  "use strict";
  /* Navigation Menu */
  const MENU = document.querySelector(".menu");
  const NAVLIST = document.querySelector(".navlist");
  const NAVLINK = document.querySelectorAll(".navlist__item");

  for (let i = 0; i < NAVLINK.length; i++) {
    NAVLINK[i].addEventListener("click", () => {
      if (!NAVLIST.classList.contains("active")) {
        NAVLIST.classList.toggle("active");
      }
    });
  }

  MENU.addEventListener("click", () => {
    NAVLIST.classList.toggle("active");
  })
};

document.addEventListener("DOMContentLoaded", init);
