export default class NewsList {
  constructor(card, api, container, NEWS_LISTS) {
    this.card = card;
    this.api = api;
    this.container = container;
    this.NEWS_LISTS = NEWS_LISTS;
    this.buttonCardlist = document.querySelector('.button_cardlist');
    this.arrNews = [];
    this._hanglerButtonCardlist = this._hanglerButtonCardlist.bind(this);
  }

  // получение готового массива DOM-элементов новостных карточек
  render(keyword) {
    // eslint-disable-next-line
    event.preventDefault();
    this.arrNews = [];
    this.buttonCardlist.removeEventListener('click', this._hanglerButtonCardlist);
    this.NEWS_LISTS.found.classList.remove('news-list_is-opened');
    this.NEWS_LISTS.notfound.classList.remove('news-list_is-opened');
    this.container.innerHTML = '';
    this.NEWS_LISTS.inprogress.classList.add('news-list_is-opened');
    this.api.getNews(keyword)
      .then((data) => {
        if (data.totalResults === 0) {
          this._newsNotFoundCreate();
        } else {
          this._newsListCreate(this.arrayNewsCreate(data.articles, keyword));
        }
      });
  }


  // получение готового массива DOM-элементов новостных карточек
  arrayNewsCreate(data, keyword) {
    data.forEach((item) => {
      this.arrNews.push(
        this.card.create(
          keyword,
          item.urlToImage,
          item.title,
          item.description,
          item.publishedAt,
          item.source.name,
          item.url,
          this.container,
        ),
      );
    });
    return this.arrNews;
  }

  // отрисовка карточек на странице
  _newsListCreate() {
    if (this.arrNews.length <= 3) {
      this.buttonCardlist.style.display = 'none';
    }
    this.arrNews.splice(0, 3).forEach((news) => {
      this.NEWS_LISTS.inprogress.classList.remove('news-list_is-opened');
      this.container.insertAdjacentElement('beforeend', news);
      this.NEWS_LISTS.found.classList.add('news-list_is-opened');
    });
    this.buttonCardlist.addEventListener('click', this._hanglerButtonCardlist);
  }

  _hanglerButtonCardlist() {
    this.arrNews.splice(0, 3).forEach((news) => {
      this.container.insertAdjacentElement('beforeend', news);
      this._checkArrayLength(this.arrNews);
    });
  }

  _checkArrayLength(arrNews) {
    if (arrNews.length === 0) {
      this.buttonCardlist.style.display = 'none';
    } else {
      this.buttonCardlist.style.display = 'block';
    }
  }

  _showMoreCards(arrNews) {
    arrNews.splice(this.container.childNodes.length, 3).forEach((news) => {
      this.container.insertAdjacentElement('beforeend', news);
    });
  }

  // блок информации - карточки не найдены
  _newsNotFoundCreate() {
    this.NEWS_LISTS.inprogress.classList.remove('news-list_is-opened');
    this.NEWS_LISTS.notfound.classList.add('news-list_is-opened');
  }

  // проверка количества карточек на странице
  checkCards() {
    return this.container.childNodes.length;
  }
}
