import React, { Component } from "react";
import SearchPanel from "../../components/search-panel/search-panel";
import BooksList from "../../components/books-list/books-list";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
import { withRouter } from "react-router-dom";

class MainPage extends Component {

    render () {
      // console.log("[main-page]list=", this.props.list);
      // console.log("[main-page]textForSearch=", this.props.textForSearch);
      if(!!this.props.list) {
        return (
          <div className="main-page">
            <SearchPanel
              searchStart={this.props.onSearchStart}
              setSearchString={this.props.onSetSearch}
              resetSearch={this.props.onResetSearch}
              textForSearch={this.props.textForSearch}
            />
            <BooksList
            list={this.props.list}
            />
          </div>
        )
      }
      else {
        return (
          <div className="main-page">
            <SearchPanel
              searchStart={this.props.onSearchStart}
              setSearchString={this.props.onSetSearch}
              resetSearch={this.props.onResetSearch}
              textForSearch={this.props.textForSearch}
            />
          </div>
        )
      }
      
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
    onSearchStart: text => dispatch(actionCreators.getBooksList(text))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MainPage));
