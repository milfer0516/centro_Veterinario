const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const mascotas = document.querySelector(".mascotas");

navToggle.addEventListener("click", () => {
  if (!navMenu.classList.toggle("nav-menu_visable")) {
    mascotas.classList.remove("mascotas_remove");
  } else {
    mascotas.classList.add("mascotas_remove");
  }
});
