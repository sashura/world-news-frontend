export default class SavedNewsList {
  constructor(apiBackend, card, CONTAINER, NEWS_LISTS, HEADER_BUTTON, auth) {
    this.apiBackend = apiBackend;
    this.card = card;
    this.CONTAINER = CONTAINER;
    this.NEWS_LISTS = NEWS_LISTS;
    this.HEADER_BUTTON = HEADER_BUTTON;
    this.auth = auth;
    this.keywordsList = document.querySelector('.info__keywords-list');
    this.keywordsText = document.querySelector('.info__keywords-text');
  }

  checkLogin() {
    if (this.auth.checkLogin()) {
      this.newsRender();
    } else {
      window.location.replace('index.html');
    }
  }

  newsRender() {
    document.querySelector('.header__link_redirect-link').style.display = 'block';
    this.apiBackend.getSavedArticles()
      .then((res) => {
        this._setInfoBlock(res.length);
        this._setKeywords(res);
        const articlesArr = [];
        res.forEach((item) => {
          articlesArr.push(
            this.card.create(item.keyword,
              item.image,
              item.title,
              item.text,
              item.date,
              item.source,
              item.link,
              this.CONTAINER,
              item._id),
          );
        });
        return articlesArr;
      })
      .then((articlesArr) => {
        this._pageState(articlesArr);
      })
      .catch((err) => {
        console.log(err);
        document.querySelector('.info__savednews').textContent = ', у вас нет сохраненных статей';
        this.keywordsListtextContent = '';
        this.keywordsTexttextContent = '';
      });
  }

  _pageState(articlesArr) {
    articlesArr.forEach((news) => {
      this.NEWS_LISTS.found.classList.add('news-list_is-opened');
      this.CONTAINER.insertAdjacentElement('beforeend', news);
    });
  }

  _setInfoBlock(length) {
    const infoTitle = document.querySelector('.info__savednews');
    if (length === 0) {
      infoTitle.textContent = ', у вас нет сохраненных статей';
    } else if (length >= 5 && length <= 20) {
      infoTitle.textContent = `, у вас ${length} сохраненных статей`;
      return;
    }
    const lengthString = length.toString();
    const lastSymbol = lengthString.slice(-1);
    const numberSymbol = Number(lastSymbol);
    if (numberSymbol === 1) {
      infoTitle.textContent = `, у вас ${length} сохраненная статья`;
    } else if (numberSymbol >= 2 && numberSymbol <= 4) {
      infoTitle.textContent = `, у вас ${length} сохраненные статьи`;
    } else {
      infoTitle.textContent = `, у вас ${length} сохраненных статей`;
    }
  }

  _setKeywords(articlesArray) {
    const keywordArray = [];
    articlesArray.forEach((article) => {
      keywordArray.push(article.keyword);
    });

    const keywordCount = {};
    keywordArray.forEach((keyword) => {
      keywordCount[keyword] = (keywordCount[keyword] || 0) + 1;
    });

    const lengthKeywords = Object.keys(keywordCount).length;

    const arrayCountKeys = [];
    Object.keys(keywordCount).forEach((key) => {
      const keyToUpperCase = key[0].toUpperCase() + key.slice(1);
      arrayCountKeys.push(keyToUpperCase);
    });
    const anotherKeywords = arrayCountKeys.length - 2;

    if (lengthKeywords === 0) {
      this.keywordsList.textContent = '';
      this.keywordsText.textContent = '';
    }
    if (lengthKeywords === 1) {
      this.keywordsList.textContent = `${arrayCountKeys[0]}`;
      this.keywordsText.textContent = 'По ключевому слову ';
    }
    if (lengthKeywords === 2) {
      this.keywordsList.textContent = `${arrayCountKeys[0]} и ${arrayCountKeys[1]}`;
      this.keywordsText.textContent = 'По ключевым словам ';
    }
    if (lengthKeywords === 3) {
      this.keywordsList.textContent = `${arrayCountKeys[0]}, ${arrayCountKeys[1]}, ${arrayCountKeys[2]}`;
      this.keywordsText.textContent = 'По ключевым словам: ';
    }
    if (lengthKeywords > 3) {
      this.keywordsList.textContent = `${arrayCountKeys[0]}, ${arrayCountKeys[1]} и ${anotherKeywords} другим`;
      this.keywordsText.textContent = 'По ключевым словам: ';
    }
  }

  unloginRedirect() {
    this.HEADER_BUTTON.addEventListener('click', () => {
      localStorage.clear();
      window.location.replace('index.html');
    });
  }
}
