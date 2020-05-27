export default class Header {
  constructor(domclass) {
    this.domclass = domclass;
    this.redirectLink = this.domclass.querySelector('.header__link_redirect-link');
    this.buttonText = this.domclass.querySelector('.header__button_user-name');
    this.headerIcon = this.domclass.querySelector('.header__button_icon');
    this.buttonHeader = this.domclass.querySelector('.header__button');
  }

  // вид хедера в залогиненном состоянии
  setLoginState(name) {
    this.buttonText.textContent = name;
    this.headerIcon.style.display = 'block';
    this.redirectLink.style.display = 'block';
  }

  // вид хедера в разлогиненном состоянии
  setUnloginState() {
    this.buttonText.textContent = 'Авторизоваться';
    this.headerIcon.style.display = 'none';
    this.redirectLink.style.display = 'none';
  }
}
