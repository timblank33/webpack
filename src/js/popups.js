/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
const blur = document.querySelector('.blur-body--right');
const html = document.querySelector('html');
const scrollHeight = window.innerWidth - document.documentElement.clientWidth;
const feedbackPopupBtn = document.querySelectorAll('.feedback-popup');
const feedbackPopup = document.querySelector('.feedback');
const feedbackPopupClose = document.querySelector('.feedback__close');
const callPopupBtn = document.querySelectorAll('.call-popup');
const callPopupClose = document.querySelector('.call__close');
const callPopup = document.querySelector('.call');

const openPopap = (btn, item, item2Close) => {
  btn.addEventListener('click', () => {
    item.style.right = '0';
    item2Close.style.right = '-120%';
    html.style.overflowY = 'hidden';
    html.style.marginRight = `${scrollHeight}px`;
    blur.style.opacity = '.96';
    if (window.innerWidth >= 768 && window.innerWidth <= 1120) {
      blur.style.zIndex = '5';
    } else if (window.innerWidth >= 1120) {
      blur.style.zIndex = '15';
    }
  });
};
for (let i = 0; i < feedbackPopupBtn.length; i++) {
  openPopap(feedbackPopupBtn[i], feedbackPopup, callPopup);
}
for (let i = 0; i < callPopupBtn.length; i++) {
  openPopap(callPopupBtn[i], callPopup, feedbackPopup);
}

const close = (item) => {
  item.style.right = '-120%';
  html.style.overflowY = 'visible';
  html.style.marginRight = '0';
  if (window.innerWidth >= 768) {
    blur.style.zIndex = '-1';
    blur.style.opacity = '0';
  }
};

callPopupClose.addEventListener('click', () => {
  close(callPopup);
});
feedbackPopupClose.addEventListener('click', () => {
  close(feedbackPopup);
});

blur.addEventListener('click', () => {
  if (feedbackPopup.style.right >= '0') {
    close(feedbackPopup);
  } else if (callPopup.style.right >= '0') {
    close(callPopup);
  }
});
