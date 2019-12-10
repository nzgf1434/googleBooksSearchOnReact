import React from "react";
import "./books-item.css";
import defaults from "../../defaultSettings";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";

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
    history
  } = props;

  return (
    <div className="item row align-items-center">
      <div className="col-6">
        <p>
          Title: <span className="bold">{title}</span>
        </p>
        <p>
          Author(s): <span className="bold">{author}</span>
        </p>
        <p>
          Published date: <span className="bold">{date}</span>
        </p>
      </div>
      <div className="col-4">
        <img src={picture} alt=" for book" className="smallThumbnail" />
      </div>
      <div className="col-2">
        <button
          className="btn btn-primary"
          onClick={e => {
            props.onItemClick(itemId);
            history.push(`/list/${itemId}`);
          }}
        >
          ...details
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onItemClick: id => dispatch(actionCreators.getItemId(id))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(BooksItem));
