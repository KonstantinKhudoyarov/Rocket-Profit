const lang = document.querySelector('.lang');
const langList = document.querySelector('.lang__list');

lang.addEventListener('click', function () {
    this.classList.toggle('lang_active');
});