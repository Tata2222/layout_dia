'use strict';

const navBlock = document.querySelector('#header-nav');
const navList = document.querySelector('#nav-list');
const navLinks = document.querySelectorAll('.nav__link');
const btnMenu = document.querySelector('#nav-btn');

btnMenu.addEventListener('click', () => {
  navBlock.classList.toggle('header__nav--show');
  navList.classList.toggle('nav__list--mobile');
  btnMenu.classList.toggle('header__nav-btn--close');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navBlock.classList.remove('header__nav--show');
    btnMenu.classList.remove('header__nav-btn--close');
  });
});

(function() {
  function trackScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }

    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  const goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
