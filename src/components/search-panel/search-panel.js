import React from "react";
import "./search-panel.css";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

class SearchPanel extends React.Component {
  state = {
    text: ""
  };

  setSearchText = e => {
    this.setState({ text: e.target.value });
  };

  searchStart = () => {
    const { onSearchChange, history } = this.props;
    onSearchChange(this.state.text);
    history.push("/list");
  };

  resetSearchResults = () => {
    const { onResetSearch } = this.props;
    this.setState({ text: "" });
    onResetSearch();
  };

  render() {
    console.log(this.props.history);
    return (
      <Router>
        <div className="input-group container">
          <label htmlFor="seaarchPanel">Google books search</label>
          <input
            id="searchPanel"
            type="text"
            className="form-control search-input"
            placeholder="type to search"
            onInput={this.setSearchText}
            onKeyPress={e => {
              if (e.key === "Enter") {
                this.searchStart();
              }
            }}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-primary"
              onClick={this.searchStart}
            >
              Search
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={this.resetSearchResults}
            >
              Reset
            </button>
          </div>
        </div>
      </Router>
    );
  }
}

export default withRouter(SearchPanel);
