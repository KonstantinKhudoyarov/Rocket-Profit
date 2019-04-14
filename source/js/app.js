const lang = document.querySelector(".lang");
const langList = document.querySelector(".lang__list");
const mobMenu = document.querySelector(".menu__mob");
const menuListMob = document.querySelector(".menu__list_mob");

lang.addEventListener("click", function() {
  this.classList.toggle("lang_active");
});

mobMenu.addEventListener("click", function() {
  this.classList.toggle("menu__mob_active");
});
