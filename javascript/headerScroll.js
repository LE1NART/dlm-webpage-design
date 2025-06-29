document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  const unternehmenLink = document.getElementById("unternehmenLink");
  const ulink = document.getElementById("ulink");
  const subMenu = unternehmenLink.querySelector(".subMenu");

  unternehmenLink.addEventListener("mouseenter", () => {
    subMenu.classList.add("showed");
    ulink.classList.add("hoverFake");
  });

  unternehmenLink.addEventListener("mouseleave", () => {
    subMenu.classList.remove("showed");
    ulink.classList.remove("hoverFake");
  });
});
