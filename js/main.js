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
  });

  /* Lazy Load Images - Intersection Observer (provide fallback for Microsoft Edge) */
  if (document.documentMode || /Edge/.test(navigator.userAgent)) {
    const img1 = document.querySelector(".img1");
    const img2 = document.querySelector(".img2");
    const img3 = document.querySelector(".img3");
    const img4 = document.querySelector(".img4");
    img1.src = "../img/myreads.png";
    img2.src = "../img/boundfree.png";
    img3.src = "../img/smartedison-md.png";
    img4.src = "../img/arcade-game.png";
  }

  const images = document.querySelectorAll("[data-src]");
  const config = {
    root: document.querySelector("#work"),
    threshold: 1.0
  };

  const preloadImage = img => {
    const src = img.getAttribute("data-src");
    if (!src) {
      return;
    }
    img.src = src;
  };

  const observer = new IntersectionObserver((entries, self) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        preloadImage(entry.target);
        // Stop observing and load the assets
        self.unobserve(entry.target);
      }
    });
  }, config);

  images.forEach(image => {
    observer.observe(image);
  });
};

document.addEventListener("DOMContentLoaded", init);
