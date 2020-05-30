import {
  LINK_REGISTRATION, LINK_LOGIN, SEARCH_FORM, POPUP_REDIRECT,
} from '../constants/elements';

export default class Initial {
  constructor(popupSignIn, popupRegistrarion, newsList, header, auth, apiBackend) {
    this.header = header;
    this.auth = auth;
    this.apiBackend = apiBackend;
    this.popupSignIn = popupSignIn;
    this.popupRegistrarion = popupRegistrarion;
    this.newsList = newsList;
  }

  checkLogin() {
    if (this.auth.checkLogin()) {
      this.apiBackend.getUserInfo()
        .then((user) => {
          this.header.setLoginState(user.name);
          this.popupSignIn.setUnloginHangler();
        });
    } else {
      this._setHandlers();
    }
    this._setSearchHanglers();
  }

  // обработчик кнопки поиска
  _setSearchHanglers() {
    SEARCH_FORM.addEventListener('submit', () => {
      const keyword = SEARCH_FORM.elements[0].value;
      this.newsList.render(keyword);
    });
  }

  // обработчики для старта
  _setHandlers() {
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
    POPUP_REDIRECT.addEventListener('click', (event) => {
      event.target.closest('.popup').classList.remove('popup_is-opened');
      popupLogin.open();
    });
  }
}
