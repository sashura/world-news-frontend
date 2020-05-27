export default class Card {
  constructor(api, apiBackend, auth) {
    this.api = api;
    this.apiBackend = apiBackend;
    this.auth = auth;
  }

  // создание элемента новостной карточки
  create(keyword, image, title, text, date, source, link) {
    const articleCard = document.createElement('div');
    articleCard.classList.add('news-list__card');
    articleCard.insertAdjacentHTML('afterbegin', `<div class="news-list__icon news-list__icon_mark-icon"></div>
    <a class="news-list__linkout" href="${link}" target="_blank">
      <div class="news-list__help-message news-list__help-message_saved">
        <p class="news-list__help-message_textsaved">Войдите, чтобы сохранять статьи</p>
      </div>
      <div class="news-list__image-container">
        <img class="news-list__image" src="${image}" alt="${keyword}">
      </div>
      <p class="news-list__date">${date}</p>
      <div class="news-list__text-container">
        <h3 class="news-list__cardtitle">${title}</h3>
        <p class="news-list__text">${text}</p>
        <div class="news-list__link">${source}</div>
      </div>
    </a>`);

    const articleData = {
      keyword,
      title,
      text,
      date,
      source,
      link,
      image,
    };
    const iconCard = articleCard.querySelector('.news-list__icon');
    this.iconState(iconCard);
    this.cardHanglers(articleCard, articleData, iconCard);
    return articleCard;
  }

  // сохранение карточки на сервере
  iconActionApi(articleData, iconCard) {
    this.apiBackend.saveArticle(articleData)
      .then(() => {
        this.iconMark(iconCard);
      });
  }

  // изменение цвета иконки при сохранении
  iconMark(iconCard) {
    iconCard.style.backgroundImage = 'url(./images/bookmark.png)';
  }

  // всплывающая подсказка при наведении мыши
  iconActiveMessage(articleCard) {
    articleCard.querySelector('.news-list__help-message').classList.add('news-list__help-message_is-opened');
  }

  // скрытие всплывающей подсказки
  iconInactiveMessage(articleCard) {
    articleCard.querySelector('.news-list__help-message').classList.remove('news-list__help-message_is-opened');
  }


  // обработчики, в зависимости от аутентификации
  cardHanglers(articleCard, articleData, iconCard) {
    articleCard.addEventListener('mouseover', () => {
      if (event.target.classList.contains('news-list__icon_unlogin')) {
        this.iconActiveMessage(articleCard);
      }
    });
    articleCard.addEventListener('mouseout', () => {
      if (event.target.classList.contains('news-list__icon_unlogin')) {
        this.iconInactiveMessage(articleCard);
      }
    });
    articleCard.addEventListener('click', () => {
      if (event.target.classList.contains('news-list__icon_login')) {
        this.iconActionApi(articleData, iconCard);
      }
    });
  }

  // перебор массива иконок при изменении состояния аутентификации
  iconArrayState() {
    const iconArray = document.querySelectorAll('.news-list__icon');
    iconArray.forEach((icon) => {
      this.iconState(icon);
    });
  }

  // установка классов иконок в зависимости от состояния аутентификации
  iconState(iconCard) {
    if (this.auth.checkLogin()) {
      iconCard.classList.add('news-list__icon_login');
      iconCard.classList.remove('news-list__icon_unlogin');
    } else {
      iconCard.classList.remove('news-list__icon_login');
      iconCard.classList.add('news-list__icon_unlogin');
    }
  }
}
