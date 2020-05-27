import Popup from './Popup';

export default class PopupRegistration extends Popup {
  constructor(domclass, form, apiBackend, POPUP_SUCCESS) {
    super();
    this.domclass = domclass;
    this.form = form;
    this.apiBackend = apiBackend;
    this.POPUP_SUCCESS = POPUP_SUCCESS;
    this.contentForm = this.domclass.querySelector('.popup__form');
    this.submitAction = this.submitAction.bind(this);
  }

  // регистрация
  submitAction() {
    event.preventDefault();
    const errorApi = this.domclass.querySelector('.error_api');
    this.apiBackend.registration(this.contentForm.elements.email.value,
      this.contentForm.elements.password.value, this.contentForm.elements.username.value)
      .then(() => {
        this.close();
        this.POPUP_SUCCESS.classList.add('popup_is-opened');
      })
      .catch((err) => {
        err.json()
          .then((res) => {
            errorApi.textContent = res.message;
          });
      });
  }
}
