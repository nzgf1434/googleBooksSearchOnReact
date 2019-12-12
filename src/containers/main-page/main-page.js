import React, { Component } from "react";
import SearchPanel from "../../components/search-panel/search-panel";
import BooksList from "../../components/books-list/books-list";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";

class MainPage extends Component {
  render() {
    const {
      list,
      onSearchStart,
      onSetSearch,
      onResetSearch,
      textForSearch,
      setClickedBookId
    } = this.props;
    return !!list ? (
      <div className="main-page">
        <SearchPanel
          searchStart={onSearchStart}
          setSearchString={onSetSearch}
          resetSearch={onResetSearch}
          textForSearch={textForSearch}
        />
        <BooksList list={list} setClickedBookId={setClickedBookId} />
      </div>
    ) : (
      <div className="main-page">
        <SearchPanel
          searchStart={onSearchStart}
          setSearchString={onSetSearch}
          resetSearch={onResetSearch}
          textForSearch={textForSearch}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    textForSearch: state.list.searchText,
    list: state.list.itemsBooks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onResetSearch: () => dispatch(actionCreators.resetSearchWord()),
    onSetSearch: text => dispatch(actionCreators.setSearchWord(text)),
    onSearchStart: text => dispatch(actionCreators.getBooksList(text)),
    setClickedBookId: id => dispatch(actionCreators.getItemId(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
