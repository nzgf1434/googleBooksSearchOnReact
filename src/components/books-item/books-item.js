import React from "react";
import classes from "./books-item.module.css";
import defaults from "../../defaultSettings";
import { withRouter } from "react-router-dom";

const BooksItem = props => {
  const {
    defaultSmallThumbnail,
    defaultTitle,
    defaultAuthor,
    defaultDate
  } = defaults;
  const {
    title = defaultTitle,
    author = defaultAuthor,
    date = defaultDate,
    picture = defaultSmallThumbnail,
    itemId,
    history,
    setClickedBookId
  } = props;

  return (
    <div className={`item row ${classes.myRow} align-items-center`}>
      <div className="col-5">
        <p>
          Title: <span className={classes.bold}>{title}</span>
        </p>
        <p>
          Author(s): <span className={classes.bold}>{author}</span>
        </p>
        <p>
          Published date: <span className={classes.bold}>{date}</span>
        </p>
      </div>
      <div className="col-4">
        <img src={picture} alt=" for book" className="smallThumbnail" />
      </div>
      <div className="col-3">
        <button
          className={`btn btn-primary ${classes.details}`}
          onClick={e => {
            setClickedBookId(itemId);
            history.push(`/${itemId}`);
          }}
        >
          ...details
        </button>
      </div>
    </div>
  );
};

export default withRouter(BooksItem);
