export default class ApiNews {
  constructor(authorization) {
    this.apiKey = authorization.apiKey;
    this.urlHeaders = authorization.urlHeaders;
  }

  getNews(keyword) {
    const url = `${this.urlHeaders + keyword}&apiKey=${this.apiKey}`;
    return fetch(url)
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
  }
}
