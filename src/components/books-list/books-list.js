import React from "react";
import "./books-list.css";
import BooksItem from "../books-item/";

const BooksList = props => {
  const { list } = props;
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
          />
        </li>
      );
    }
  );
  return <ul>{elements}</ul>;
};


export default BooksList;
