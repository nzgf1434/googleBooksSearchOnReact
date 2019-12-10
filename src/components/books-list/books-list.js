import React from "react";
import "./books-list.css";
import BooksItem from "../books-item/";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import * as actionCreators from "../../store/actions/index";

const BooksList = props => {
  const { list } = props;

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
            />
          </li>
        );
      }
    );
    return <ul>{elements}</ul>;
  } else {
    return <h1>No data</h1>;
  }
};

const mapStateToProps = state => {
  return {
    list: state.itemsBooks
  };
};

export default connect(mapStateToProps, null)(withRouter(BooksList));
