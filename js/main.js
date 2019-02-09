const init = () => {
  "use strict";
  /* Navigation Menu */
  const MENU = document.querySelector(".menu");
  const NAVLIST = document.querySelector(".navlist");

  MENU.addEventListener("click", () => {
    NAVLIST.classList.toggle("active");
  })
};

document.addEventListener("DOMContentLoaded", init);
