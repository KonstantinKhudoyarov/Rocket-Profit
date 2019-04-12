const lang = document.querySelector('.lang');
const langList = document.querySelector('.lang__list');

lang.addEventListener('click', function () {
    langList.classList.toggle('lang__list_active');
});