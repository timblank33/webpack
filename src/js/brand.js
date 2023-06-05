/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable semi */
const imagesLogoScr = [
  'img/Bitmap.png',
  'img/Bitmap_1.png',
  './img/Bitmap_2.png',
  './img/Bitmap_3.png',
  './img/Bitmap_4.png',
  './img/Bitmap_5.png',
  './img/Bitmap_6.png',
  './img/Bitmap_7.png',
  './img/Bitmap_1.png',
  './img/Bitmap_2.png',
  './img/Bitmap_3.png',
];
const brandLogo = document.querySelector('.brand__logo');

const newBrandLogo = (item) => {
  const brandLogoBlock = document.createElement('div');
  brandLogoBlock.classList.add('brand__logo-block');
  brandLogoBlock.classList.add('swiper-slide');
  brandLogo.appendChild(brandLogoBlock);

  const brandLogoBlockImg = document.createElement('img');
  brandLogoBlockImg.classList.add('brand__logo-block-img');
  brandLogoBlock.appendChild(brandLogoBlockImg);

  const brandLogoBlockArrow = document.createElement('img');
  brandLogoBlockArrow.classList.add('brand__logo-block-arrow');
  brandLogoBlock.appendChild(brandLogoBlockArrow);
  brandLogoBlockArrow.src = './img/go.svg';
  brandLogoBlockImg.src = item;
};

for (let i = 0; i < imagesLogoScr.length; i++) {
  newBrandLogo(imagesLogoScr[i]);
}
