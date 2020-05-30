export default class Card {
  constructor(apiBackend, auth, dateToFormat, helpMessages) {
    this.apiBackend = apiBackend;
    this.auth = auth;
    this.dateToFormat = dateToFormat;
    this.helpMessages = helpMessages;
  }

  // создание элемента новостной карточки
  create(keyword, image, title, text, date, source, link, container, cardid) {
    const dateFormat = this.dateToFormat(date);

    const articleCard = document.createElement('div');
    articleCard.classList.add('news-list__card');
    articleCard.insertAdjacentHTML('afterbegin', `<div class="news-list__icon"></div>
    <a class="news-list__linkout" href="${link}" target="_blank">
      <div class="news-list__help-message news-list__help-message_saved">
        <p class="news-list__help-message_text"></p>
      </div>
      <div class="news-list__image-container">
        <img class="news-list__image" src="${image}" alt="${keyword}">
      </div>
      <p class="news-list__date">${dateFormat}</p>
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
    if (container.classList.contains('news-list__cardlist_main')) {
      iconCard.classList.add('news-list__icon_mark-icon');
      this._iconState(iconCard);
      this._cardHanglers(articleCard, articleData, iconCard);
    }
    if (container.classList.contains('news-list__cardlist_savednews')) {
      iconCard.classList.add('news-list__icon_trash-icon');
      this._savedCardsHanglers(iconCard, cardid, articleCard);
    }

    return articleCard;
  }

  _savedCardsHanglers(iconCard, cardid, articleCard) {
    iconCard.addEventListener('mouseover', () => this._iconActiveMessage(articleCard, this.helpMessages.saved));
    iconCard.addEventListener('mouseout', () => this._iconInactiveMessage(articleCard));
    iconCard.addEventListener('click', () => {
      this.apiBackend.deleteCard(cardid)
        .then(() => {
          articleCard.remove();
        });
    });
  }

  // сохранение карточки на сервере
  iconActionApi(articleData, iconCard) {
    this.apiBackend.saveArticle(articleData)
      .then(() => {
        this._iconMark(iconCard);
      });
  }

  // изменение цвета иконки при сохранении
  _iconMark(iconCard) {
    iconCard.style.backgroundImage = 'url(./images/bookmark.png)';
  }

  // всплывающая подсказка при наведении мыши
  _iconActiveMessage(articleCard, text) {
    articleCard.querySelector('.news-list__help-message').classList.add('news-list__help-message_is-opened');
    articleCard.querySelector('.news-list__help-message_text').textContent = text;
  }

  // скрытие всплывающей подсказки
  _iconInactiveMessage(articleCard) {
    articleCard.querySelector('.news-list__help-message').classList.remove('news-list__help-message_is-opened');
    articleCard.querySelector('.news-list__help-message_text').textContent = '';
  }


  // обработчики, в зависимости от аутентификации
  _cardHanglers(articleCard, articleData, iconCard) {
    articleCard.addEventListener('mouseover', (event) => {
      if (event.target.classList.contains('news-list__icon_unlogin')) {
        this._iconActiveMessage(articleCard, this.helpMessages.main);
      }
    });
    articleCard.addEventListener('mouseout', (event) => {
      if (event.target.classList.contains('news-list__icon_unlogin')) {
        this._iconInactiveMessage(articleCard);
      }
    });
    articleCard.addEventListener('click', (event) => {
      if (event.target.classList.contains('news-list__icon_login')) {
        this.iconActionApi(articleData, iconCard);
      }
    });
  }

  // перебор массива иконок при изменении состояния аутентификации
  iconArrayState() {
    const iconArray = document.querySelectorAll('.news-list__icon');
    iconArray.forEach((icon) => {
      this._iconState(icon);
    });
  }

  // установка классов иконок в зависимости от состояния аутентификации
  _iconState(iconCard) {
    if (this.auth.checkLogin()) {
      iconCard.classList.add('news-list__icon_login');
      iconCard.classList.remove('news-list__icon_unlogin');
    } else {
      iconCard.classList.remove('news-list__icon_login');
      iconCard.classList.add('news-list__icon_unlogin');
    }
  }
}
