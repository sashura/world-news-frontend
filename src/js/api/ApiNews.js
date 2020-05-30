import { dateFrom, dateTo } from '../utils/DateforSearch';

export default class ApiNews {
  constructor(authorization) {
    this.apiKey = authorization.apiKey;
    this.urlHeaders = authorization.urlHeaders;
    this.pageSize = authorization.pageSize;
    this.sortBy = authorization.sortBy;
  }

  getNews(keyword) {
    const url = `${this.urlHeaders + keyword}&from=${dateFrom}&to=${dateTo}&sortBy=${this.sortBy}&pageSize=${this.pageSize}&apiKey=${this.apiKey}`;
    return fetch(url)
      .then((res) => res.json())
      .catch((err) => err.json());
  }
}
