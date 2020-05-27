export default class Auth {
  saveToken(token) {
    localStorage.setItem('token', token);
  }

  checkLogin() {
    return (localStorage.getItem('token') !== null);
  }
}
