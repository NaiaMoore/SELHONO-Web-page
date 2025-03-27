'use strict'

const icon = document.querySelector('.search__btn')
const search = document.querySelector('.header__search');


icon.onclick = function () {
  search.classList.toggle('search--active')
}

// Burger menu


const mobileNav = document.querySelector('.nav_list');
const burgerButton = document.querySelector('.burger');

burgerButton.addEventListener('click', () => {
  const visibility = mobileNav.getAttribute('data-visible');
  console.log(visibility);
  if (visibility === 'false') {
    mobileNav.setAttribute('data-visible', true);
    burgerButton.setAttribute('aria-expanded', true); 
}else if(visibility === 'true'){
  mobileNav.setAttribute('data-visible', false);
  burgerButton.setAttribute('aria-expanded', false); 
}

})



