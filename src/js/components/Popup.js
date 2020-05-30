export default class Popup {
  constructor(form, apiBackend) {
    this.form = form;
    this.apiBackend = apiBackend;
  }

  // открытие попапов
  open() {
    this.form._clearContent(this.contentForm);
    this.domclass.classList.add('popup_is-opened');
    //  eslint-disable-next-line no-restricted-globals
    this.form._submitButtonState(event, this.domclass);
    this._hanglerAdd();
  }

  // закрытие попапов
  close() {
    this.domclass.classList.remove('popup_is-opened');
    this._hanglerRemove();
  }

  // обработчики инпутов и сабмита
  _hanglerAdd() {
    this.domclass.querySelector('.popup__close').addEventListener('click', () => this.close());
    this.contentForm.addEventListener('submit', this.submitAction);
    this.domclass.addEventListener('input', (event) => this.form._submitButtonState(event, this.domclass));
    this.domclass.addEventListener('input', (event) => this.form._validateInputElement(event, this.domclass));
  }

  // удаление обработчика сабмита
  _hanglerRemove() {
    this.contentForm.removeEventListener('submit', this.submitAction);
  }
}
