export default class ApiBackend {
  constructor(backendData) {
    this.backendData = backendData;
  }

  registration(email, password, name) {
    return fetch((`${this.backendData.ip}/signup`), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .catch((err) => Promise.reject(err));
  }

  login(email, password) {
    return fetch((`${this.backendData.ip}/signin`), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .catch((err) => Promise.reject(err));
  }

  getUserInfo() {
    return fetch((`${this.backendData.ip}/users/me`), {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .catch((err) => Promise.reject(err));
  }

  getSavedArticles() {
    return fetch((`${this.backendData.ip}/articles`), {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .catch((err) => Promise.reject(err));
  }

  deleteCard(id) {
    return fetch((`${this.backendData.ip}/articles/${id}`), {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .catch((err) => Promise.reject(err));
  }

  saveArticle(articleData) {
    return fetch((`${this.backendData.ip}/articles`), {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        keyword: articleData.keyword,
        title: articleData.title,
        text: articleData.text,
        date: articleData.date,
        source: articleData.source,
        link: articleData.link,
        image: articleData.image,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .catch((err) => Promise.reject(err));
  }
}
