import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
import { withRouter } from "react-router-dom";
import "./search-panel.css";

class SearchPanel extends React.Component {
  state = {
    text: ""
  };

  setSearchText = e => {
    this.setState({ text: e.target.value });
  };

  searchStart = () => {
    const { history } = this.props;
    history.push("/list");
  };

  render() {
    return (
      <div className="input-group container">
        <label htmlFor="searchPanel">Google books search</label>
        <input
          id="searchPanel"
          type="text"
          className="form-control search-input"
          placeholder={!!this.props.val ? this.props.val : "type to search"}
          onInput={this.setSearchText}
          onKeyPress={e => {
            if (e.key === "Enter") {
              this.props.onSetSearch(this.state.text);
              this.searchStart();
            }
          }}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              this.props.onSetSearch(this.state.text);
              this.searchStart();
            }}
          >
            Search
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={this.props.onResetSearch}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    val: state.searchText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onResetSearch: () => dispatch(actionCreators.resetSearchWord()),
    onSetSearch: text => dispatch(actionCreators.setSearchWord(text))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchPanel));
