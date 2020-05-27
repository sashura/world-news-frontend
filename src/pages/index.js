import './savednews.css';

import Card from '../js/components/Card';
import NewsList from '../js/components/NewsList';
import Api from '../js/api/ApiNews';

const authorization = require('../js/constants/authorization');

const api = new Api(authorization);

const helpMessage = document.querySelector('.news-list__help-message');
const cardIcon = document.querySelector('.news-list__icon');
const menuButtonHeader = document.querySelector('.header__menu-icon');
const menuHeader = document.querySelector('.header__nav-block');
const header = document.querySelector('.header');

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

cardIcon.addEventListener('mouseover', () => {
  helpMessage.classList.add('news-list__help-message_is-opened');
});

cardIcon.addEventListener('mouseout', () => {
  helpMessage.classList.remove('news-list__help-message_is-opened');
});
