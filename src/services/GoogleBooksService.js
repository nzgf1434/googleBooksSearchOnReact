
export default class GoogleBooksService {
  _apiBase = 'https://www.googleapis.com/books/v1/volumes?q=';
  _key = '&key=AIzaSyBC78dTq98JJQAtrFqIATxkQBR7aeVQ5go';

  async getSearchResult(url) {
      const res = await fetch(`${this._apiBase}${url}${this._key}`);
      if (!res.ok){  // (!res.ok & res.status !== 403) Работает ли 403?!!!
        throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
      }
      console.log('API called');
      return await res.json();
  }

}
