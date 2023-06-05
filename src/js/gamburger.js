/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable semi */
const html = document.querySelector('html');
const gamburgerBtn = document.querySelector('.gamburger-img');
const gamburgerMenu = document.querySelector('.gamburger');
const gamburgerClose = document.querySelector('.gamburger__nav-close');
const blur = document.querySelector('.blur-body--left');

gamburgerBtn.addEventListener('click', () => {
  gamburgerMenu.style.left = '0';
  html.style.overflowY = 'hidden';
  if (window.innerWidth >= 768) {
    blur.style.zIndex = '5';
    blur.style.opacity = '.96';
  }
});

const close = () => {
  gamburgerMenu.style.left = '-120%';
  html.style.overflowY = 'visible';
  if (window.innerWidth >= 768) {
    blur.style.zIndex = '-1';
    blur.style.opacity = '0';
  }
}
gamburgerClose.addEventListener('click', () => {
  close();
});

blur.addEventListener('click', () => {
  close();
})

window.addEventListener('resize', () => {
  gamburgerMenu.style.left = '-120%';
  if (window.innerWidth >= 1120) {
    gamburgerMenu.style.left = '0';
  }
});
