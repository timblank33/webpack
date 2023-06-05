/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars, no-undef
import Swiper from 'swiper/bundle';

const brandSwiperWindow = document.querySelector('.brand__swiper-window');
const variousSwiperWindow = document.querySelector('.various__swiper-window');
const priceSwiperWindow = document.querySelector('.price__swiper-window');
if (window.innerWidth > 768) {
  brandSwiperWindow.classList.remove('swiper--brand');
  variousSwiperWindow.classList.remove('swiper--various');
  priceSwiperWindow.classList.remove('swiper--price');
}

const swiper = new Swiper('.swiper--brand', {
  pagination: {
    el: '.swiper-pagination--brand',
    clickable: true,
  },
});

const swiper2 = new Swiper('.swiper--various', {
  pagination: {
    el: '.swiper-pagination--various',
    clickable: true,
  },
});

const swiper3 = new Swiper('.swiper--price', {
  pagination: {
    el: '.swiper-pagination--price',
    clickable: true,
  },
});
