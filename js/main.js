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

  /* Lazy Load Images - Intersection Observer */
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
