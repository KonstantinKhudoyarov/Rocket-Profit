(function () {
  const menu = document.querySelector('.menu');
  const lang = document.querySelector(".lang");
  const mobMenu = document.querySelector(".menu__mob");

  lang.addEventListener("click", function () {
    this.classList.toggle("lang_open");
  });

  mobMenu.addEventListener("click", function () {
    menu.classList.toggle("menu_open");
  });


})();

(function () {

  const mobileMenuBtnOpen = document.querySelector('.menu__mob_small');
  const mobileMenuBtnClose = document.querySelector('.mobile-menu__mob');
  const mobileMenuOverlay = document.querySelector('.mobile-menu');
  const langMobile = document.querySelector('.mobile-menu__lang');

  mobileMenuBtnOpen.addEventListener('click', function () {
    mobileMenuOverlay.classList.add('mobile-menu_open');
  });

  mobileMenuBtnClose.addEventListener('click', function () {
    mobileMenuOverlay.classList.remove('mobile-menu_open');
  });

  langMobile.addEventListener('click', function () {
    this.classList.toggle('mobile-menu__lang_open');
  });

})();