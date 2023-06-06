/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
const blockMore = document.querySelectorAll('.main__more');
const btnMore = document.querySelectorAll('.main__btn-more');
const btnMoreImg = document.querySelectorAll('.main__more-img');
const btnMoreText = document.querySelectorAll('.main__more-text');

for (let i = 0; i < blockMore.length; i++) {
  blockMore[i].style.maxHeight = '160px';
  if (blockMore[i].classList.contains('about__text') && window.innerWidth < 768) {
    blockMore[i].style.maxHeight = '90px';
  }
  btnMore[i].addEventListener('click', () => {
    if (blockMore[i].style.maxHeight === '160px' || blockMore[i].style.maxHeight === '90px') {
      blockMore[i].style.maxHeight = `${blockMore[i].scrollHeight + 1}px`;
      btnMoreImg[i].style.transform = 'rotateX(180deg)';
      btnMoreText[i].textContent = 'Скрыть все';
    } else {
      blockMore[i].style.maxHeight = '160px';
      btnMoreImg[i].style.transform = 'rotateX(0deg)';

      if (blockMore[i].classList.contains('about__text') && window.innerWidth < 768) {
        btnMoreText[i].textContent = 'Читать далее ';
        blockMore[i].style.maxHeight = '90px';
        btnMoreImg[i].style.transform = 'rotateX(0deg)';
      } else if (blockMore[i].classList.contains('about__text') && window.innerWidth > 768) {
        btnMoreText[i].textContent = 'Читать далее ';
        blockMore[i].style.maxHeight = '160px';
        btnMoreImg[i].style.transform = 'rotateX(0deg)';
      } else {
        btnMoreText[i].textContent = 'Показать все';
      }
    }
  });
}
