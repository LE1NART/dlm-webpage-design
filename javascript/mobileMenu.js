/* Hamburger-Menü umschalten */
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".mobile-nav");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.classList.toggle("open");
  });
});
