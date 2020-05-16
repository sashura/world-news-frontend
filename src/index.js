import './styles/index.css';

const popupClose = document.querySelector('.popup__close');
const popupLogin = document.querySelector('.popup__login');
const buttonLogin = document.querySelector('.header__button');
const popupButton = document.querySelector('.popup__button');
const popupSuccess = document.querySelector('.popup__successsignup');
const linkCreateUser = document.getElementById('link-createuser');
const popupCreateUser = document.querySelector('.popup__createuser');
const linkLogin = document.getElementById('link-login');
const buttonCardList = document.querySelector('.button_cardlist');
const hiddenCards = document.querySelectorAll('.hidden');
const popupInput = document.querySelector('.popup__input');
const helpMessage = document.querySelector('.news-list__help-message');
const cardIcon = document.querySelector('.news-list__icon');
const markIcon = document.querySelectorAll('.news-list__icon_mark-icon');
const menuButtonHeader = document.querySelector('.header__menu-icon');
const menuHeader = document.querySelector('.header__nav-block');
const header = document.querySelector('.header');
const errorInput = document.getElementById('error');

menuButtonHeader.addEventListener('click', () => {
  if (menuButtonHeader.classList.value === 'header__menu-icon header__menu-icon_white header__menu-icon_close') {
    menuHeader.classList.remove('header__nav-block_is-opened');
    header.style.backgroundColor = '';
    menuButtonHeader.style.backgroundImage = 'url(./images/menu.svg)';
    menuButtonHeader.classList.remove('header__menu-icon_close');
  } else if (menuButtonHeader.classList.value === 'header__menu-icon header__menu-icon_close-white') {
    menuHeader.classList.remove('header__nav-block_is-opened');
    header.style.backgroundColor = '';
    menuButtonHeader.style.backgroundImage = 'url(./images/menu_savenews.svg)';
    menuButtonHeader.classList.remove('header__menu-icon_close');
  } else if (menuButtonHeader.classList.value === 'header__menu-icon header__menu-icon_white') {
    menuHeader.classList.add('header__nav-block_is-opened');
    header.style.backgroundColor = '#1A1B22';
    menuButtonHeader.style.backgroundImage = 'url(./images/back.svg)';
    menuButtonHeader.classList.add('header__menu-icon_close');
  } else if (menuButtonHeader.classList.value === 'header__menu-icon header__menu-icon_black') {
    menuHeader.classList.add('header__nav-block_is-opened');
    header.style.backgroundColor = '#ffffff';
    menuButtonHeader.classList.add('header__menu-icon_close');
  }
});


buttonLogin.addEventListener('click', () => {
  popupLogin.classList.add('popup_is-opened');
  header.style.backgroundColor = '';
});


popupButton.addEventListener('click', (event) => {
  event.preventDefault();
  popupSuccess.classList.add('popup_is-opened');
  popupLogin.classList.remove('popup_is-opened');
});

linkCreateUser.addEventListener('click', (event) => {
  event.preventDefault();
  popupLogin.classList.remove('popup_is-opened');
  popupCreateUser.classList.add('popup_is-opened');
});

linkLogin.addEventListener('click', (event) => {
  event.preventDefault();
  popupCreateUser.classList.remove('popup_is-opened');
  popupLogin.classList.add('popup_is-opened');
});

buttonCardList.addEventListener('click', () => {
  hiddenCards.forEach((item) => {
    item.classList.remove('hidden');
  });
});

popupInput.addEventListener('input', () => {
  popupButton.classList.add('popup__button_active');
  errorInput.classList.add('error_open');
  // eslint-disable-next-line
  event.target.classList.add('error_open');
});

cardIcon.addEventListener('mouseover', () => {
  helpMessage.classList.add('news-list__help-message_is-opened');
});

cardIcon.addEventListener('mouseout', () => {
  helpMessage.classList.remove('news-list__help-message_is-opened');
});

markIcon.forEach((item) => {
  item.addEventListener('click', () => {
    // eslint-disable-next-line
    event.target.style.backgroundImage = 'url(./images/bookmark.png)';
  });
});

popupClose.addEventListener('click', () => {
  popupLogin.classList.remove('popup_is-opened');
});
