export default class Form {
  constructor(errorsMessages) {
    this.errorsMessages = errorsMessages;
  }

  // валидация инпутов
  _validateInputElement(event, element) {
    if (event.target.validity.typeMismatch) {
      element.querySelector(`.error-${event.target.type}`).textContent = this.errorsMessages.emailError;
    } else if (event.target.value.length === 0) {
      element.querySelector(`.error-${event.target.type}`).textContent = this.errorsMessages.requiredError;
    } else {
      element.querySelector(`.error-${event.target.type}`).textContent = '';
    }
  }

  // перебор массива инпутов для установки состояния кнопки формы
  _submitButtonValidation(event, element) {
    const inputs = Array.from(element.querySelectorAll('.popup__input'));
    return inputs.every((input) => input.validity.valid);
  }

  // установка состояния кнопки формы
  _submitButtonState(event, element) {
    const submitButton = element.querySelector('.popup__button');
    if (this._submitButtonValidation(event, element) === true) {
      submitButton.classList.add('popup__button_active');
      submitButton.removeAttribute('disabled');
    } else {
      submitButton.classList.remove('popup__button_active');
      submitButton.setAttribute('disabled', '');
    }
  }

  // очистка полей форм
  _clearContent(form) {
    form.reset();
  }
}
