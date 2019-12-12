import React from "react";
import "./details-books-item.css";
import defaults from "../../defaultSettings";

export default function DetailsBooksItem(props) {
  console.log(props);
  const {
    defaultThumbnail,
    defaultTitle,
    defaultAuthor,
    defaultDate,
    defaultPublisher,
    defaultPageCount,
    defaultDescription
  } = defaults;
  const {
    details: {
      volumeInfo: {
        authors = defaultAuthor,
        title = defaultTitle,
        publisher = defaultPublisher,
        publishedDate = defaultDate,
        pageCount = defaultPageCount,
        description = defaultDescription,
        imageLinks: { thumbnail = defaultThumbnail }
      }
    }
  } = props;

  return (
    <div className="card">
      <img src={thumbnail} alt="for book" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h5 className="card-subtitle mb-2 text-muted">Author(s): {authors}</h5>
        <h5 className="class-text">Pablished: {publishedDate}</h5>
        <h5 className="class-text">Publisher: {publisher}</h5>
        <h5 className="class-text">Pages: {pageCount}</h5>
        <div className="class-text">Description: {description}</div>
      </div>
    </div>
  );
}
