const CLOSEICONS = Array.from(document.querySelectorAll('.popup__close'));
const CONTAINER = document.querySelector('.news-list__cardlist');
const HEADER_BUTTON = document.querySelector('.header__button');
const LINK_REGISTRATION = document.querySelector('.popup__link-registration');
const LINK_LOGIN = document.querySelector('.popup__link-login');
const POPUP_REDIRECT = document.querySelector('.popup__redirect-login');
const SEARCH_FORM = document.querySelector('.search__form');
const HEADER_BLOCK = document.querySelector('.header_main-page');
const POPUP_SUCCESS = document.querySelector('.popup__successsignup');
const NEWS_LISTS = {
  inprogress: document.querySelector('.news-list__content_searchinprogress'),
  notfound: document.querySelector('.news-list__content_notfound'),
  found: document.querySelector('.news-list__content_found'),
};

export {
  CLOSEICONS, CONTAINER, HEADER_BUTTON, LINK_REGISTRATION,
  LINK_LOGIN, SEARCH_FORM, HEADER_BLOCK, NEWS_LISTS, POPUP_REDIRECT, POPUP_SUCCESS,
};
