import {
  LINK_REGISTRATION, LINK_LOGIN, SEARCH_FORM, POPUP_REDIRECT,
} from '../constants/elements';

export default class Initial {
  constructor(popupSignIn, popupRegistrarion, newsList, header) {
    this.header = header;
    this.popupSignIn = popupSignIn;
    this.popupRegistrarion = popupRegistrarion;
    this.newsList = newsList;
  }

  // обработчики для старта
  setHandlers() {
    localStorage.clear();
    const popupLogin = this.popupSignIn;
    const popupReg = this.popupRegistrarion;
    this.popupSignIn.setButtonHangler();
    LINK_REGISTRATION.addEventListener('click', () => {
      popupLogin.close();
      popupReg.open();
    });
    LINK_LOGIN.addEventListener('click', () => {
      popupReg.close();
      popupLogin.open();
    });
    POPUP_REDIRECT.addEventListener('click', () => {
      event.target.closest('.popup').classList.remove('popup_is-opened');
      popupLogin.open();
    });
    SEARCH_FORM.addEventListener('submit', () => {
      const keyword = SEARCH_FORM.elements[0].value;
      this.newsList.render(keyword);
    });
  }
}
