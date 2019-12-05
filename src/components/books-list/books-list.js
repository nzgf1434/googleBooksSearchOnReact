import React from "react";
import "./books-list.css";
import BooksItem from "../books-item/";

const BooksList = props => {
  const { list, onDetailsClick } = props;

  if (list) {
    const elements = list.map(
      ({
        id,
        volumeInfo: { title, authors, publishedDate, imageLinks = {} }
      }) => {
        return (
          <li key={id} className="container">
            <BooksItem
              itemId={id}
              title={title}
              author={authors}
              date={publishedDate}
              picture={imageLinks.smallThumbnail}
              onDetailsClick={onDetailsClick}
            />
          </li>
        );
      }
    );
    return <ul>{elements}</ul>;
  } else {
    return <ul></ul>;
  }
};
export default BooksList;
