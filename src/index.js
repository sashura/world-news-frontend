const popupClose = document.querySelector('.popup__close');
const popupLogin = document.querySelector('.popup__login');
const buttonLogin = document.querySelector('.button_unauth');
const popupButton = document.querySelector('.popup__button');
const popupSuccess = document.querySelector('.popup__successsignup');
const linkCreateUser = document.getElementById('link-createuser');
const popupCreateUser = document.querySelector('.popup__createuser');
const linkLogin = document.getElementById('link-login');
const buttonCardList = document.querySelector('.button_cardlist');
const hiddenCards = document.querySelectorAll('.hidden');
const popupInput = document.querySelector('.popup__input');

buttonLogin.addEventListener('click', () => {
  popupLogin.classList.add('popup_is-opened');
});

popupClose.addEventListener('click', () => {
  popupLogin.classList.remove('popup_is-opened');
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
});
