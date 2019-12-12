export const googleBooksGetListService = async req => {
  const _apiBase = "https://www.googleapis.com/books/v1/volumes?q=";
  const _key = "&key=AIzaSyBC78dTq98JJQAtrFqIATxkQBR7aeVQ5go";

  //request params:

  // &maxResults=40 - default 10, max=40 books in 1 request
  //startIndex - The position in the collection at which to start. The index of the first item is 0.

  // &printType=(magazines | books | all)

  // &orderBy=(relevance | newest)

  //&filter=() partial - Returns results where at least parts of the text are previewable.
  //                  full - Only returns results where all of the text is viewable.
  //                  free-ebooks - Only returns results that are free Google eBooks.
  //                  paid-ebooks - Only returns results that are Google eBooks with a price.
  //                  ebooks - Only returns results that are Google eBooks, paid or free.
  // Examples of non-eBooks would be publisher content that is available in limited preview and
  //  not for sale, or magazines.

  const res = await fetch(
    `${_apiBase}${req}&orderBy=newest&filter=paid-ebooks${_key}`
  );
  if (!res.ok) {
    // (!res.ok & res.status !== 403) Работает ли 403?!!!
    throw new Error(`Could not fetch ${req}, received ${res.status}`);
  }
  console.log("API list called");
  return await res.json();
};

// export const googleBooksGetListService = {};

//https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=yourAPIKey

export const googleBooksGetBookService = async req => {
  const _apiBase = "https://www.googleapis.com/books/v1/volumes/";

  const res = await fetch(`${_apiBase}${req}`);
  if (!res.ok) {
    // (!res.ok & res.status !== 403) Работает ли 403?!!!
    throw new Error(`Could not fetch ${req}, received ${res.status}`);
  }
  console.log("API book called");
  return await res.json();
};
