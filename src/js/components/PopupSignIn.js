import Popup from './Popup';

export default class PopupSignIn extends Popup {
  constructor(domclass, form, apiBackend, auth, card, header, newsList) {
    super();
    this.domclass = domclass;
    this.newsList = newsList;
    this.header = header;
    this.form = form;
    this.apiBackend = apiBackend;
    this.auth = auth;
    this.card = card;
    this.contentForm = this.domclass.querySelector('.popup__form');
    this.buttonHeader = document.querySelector('.header__button');
    this.submitAction = this.submitAction.bind(this);
    this.open = this.open.bind(this);
    this.setUnloginState = this.setUnloginState.bind(this);
  }


  // аутентификация
  submitAction(event) {
    const errorApi = this.domclass.querySelector('.error_api');
    event.preventDefault();
    this.apiBackend.login(this.contentForm.elements.email.value,
      this.contentForm.elements.password.value)
      .then((res) => {
        this.close();
        this.header.setLoginState(res.user);
        this.auth.saveToken(res.token);
        this._removeButtonHangler();
        this.setUnloginHangler();
        if (this.newsList.checkCards() !== 0) {
          this.card.iconArrayState();
        }
      })
      .catch((err) => err.json())
      .then((res) => {
        errorApi.textContent = res.message;
      });
  }

  // установка обработчика в незалогиненном состоянии - открытие попапа
  _setButtonHangler() {
    this.buttonHeader.addEventListener('click', this.open);
  }

  // снятие обработчика открытия попапа логина
  _removeButtonHangler() {
    this.buttonHeader.removeEventListener('click', this.open);
  }

  // установка обработчика в залогиненном состоянии - разлогинивание
  setUnloginHangler() {
    this.buttonHeader.addEventListener('click', this.setUnloginState);
  }

  // снятие обработчика в залогиненном состоянии - разлогинивание
  _removeUnloginHangler() {
    this.buttonHeader.removeEventListener('click', this.setUnloginState);
  }

  // приведение хедера и кнопки открытия попапа в незалогиненное состояние
  setUnloginState() {
    this.header.setUnloginState();
    this._setButtonHangler();
    this._removeUnloginHangler();
  }
}
