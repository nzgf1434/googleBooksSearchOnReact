// export default class PenguinBooksService {
//     _apiBase = 'https://api.chucknorris.io/jokes/search?query=';

    
  
//     async getSearchResult(keywords) {
//         const res = await fetch(`${this._apiBase}${keywords}`);
  
//         if (!res.ok){
//           throw new Error(`Could not fetch ${keywords}` +
//           `, received ${res.status}`)
//         }
//         return await res.json();
//     }
  
//   }

//   let x = new PenguinBooksService();
//   x.getSearchResult('yes')
//   .then((body) => {
//     console.log(body)
//   });