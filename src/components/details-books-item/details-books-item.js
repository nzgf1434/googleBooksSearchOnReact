import React from "react";
import classes from "./details-books-item.module.css";
import defaults from "../../defaultSettings";

export default function DetailsBooksItem(props) {
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

  const parseHtml = () => {
    return { __html: description };
  };

  return (
    <div className={`container ${classes.card}`}>
      <div className="row align-items-center">
        <div className={`col-sm-4 ${classes["img-block"]}`}>
          <img className={classes.img} src={thumbnail} alt="for book" />
        </div>
        <div className="col-sm-8">
          <h1 className={classes["card-title"]}>{title}</h1>
          <h2 className="card-subtitle mb-2 text-muted">
            Author(s): {authors}
          </h2>
          <h2 className="class-text">Pablished: {publishedDate}</h2>
          <h2 className="class-text">Publisher: {publisher}</h2>
          <h2 className="class-text">Pages: {pageCount}</h2>
        </div>
      </div>
      <div className="row">
        <div
          className={`col-sm-12 ${classes.description}`}
          dangerouslySetInnerHTML={parseHtml()}
        ></div>
      </div>
    </div>
  );
}
