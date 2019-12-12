import React, { Component } from "react";
import SearchPanel from "../../components/search-panel";
import DetailsBookItem from "../../components/details-books-item";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";

class BookPage extends Component {
  componentDidMount() {
    const { bookId } = this.props;
    // todo: review: const { bookId, getBookData } = this.props;
    this.props.getBookData(bookId);
  }

  render() {
    const { bookInfo } = this.props;
    return !!bookInfo ? (
      <div className="book-page">
        <SearchPanel
        // todo: review деструктуризация
          searchStart={this.props.onSearchStart}
          setSearchString={this.props.onSetSearch}
          resetSearch={this.props.onResetSearch}
          textForSearch={this.props.textForSearch}
        />
        <DetailsBookItem details={this.props.bookInfo} />
      </div>
    ) : (
      <div className="book-page">
        <SearchPanel
          searchStart={this.props.onSearchStart}
          setSearchString={this.props.onSetSearch}
          resetSearch={this.props.onResetSearch}
          textForSearch={this.props.textForSearch}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // todo: review деструктуризация
    textForSearch: state.list.searchText,
    bookInfo: state.item.details,
    bookId: state.item.itemId
  };
};

const mapDispatchToProps = dispatch => {
  // todo: review велосипед
  /**
   * {
   *    export default connect(mapStateToProps, { ...actionCreators })(BookPage);
   * }
   */
  return {
    onResetSearch: () => dispatch(actionCreators.resetSearchWord()),
    onSetSearch: text => dispatch(actionCreators.setSearchWord(text)),
    onSearchStart: text => dispatch(actionCreators.getBooksList(text)),
    getBookData: id => dispatch(actionCreators.getItem(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
