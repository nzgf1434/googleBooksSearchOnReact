export const googleBooksGetListService = async req => {
  const _apiBase = "https://www.googleapis.com/books/v1/volumes?q=";
  const _key = "&key=AIzaSyBC78dTq98JJQAtrFqIATxkQBR7aeVQ5go";

  const res = await fetch(`${_apiBase}${req}${_key}`);
  if (!res.ok) {
    // (!res.ok & res.status !== 403) Работает ли 403?!!!
    throw new Error(`Could not fetch ${req}, received ${res.status}`);
  }
  console.log("API called");
  return await res.json();
};

export const googleBooksGetBookService = {};
