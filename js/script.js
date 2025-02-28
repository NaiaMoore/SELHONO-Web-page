const icon  = document.querySelector('.search__btn')
const search = document.querySelector('.header__search');


icon.onclick = function() {
search.classList.toggle('search--active')
}