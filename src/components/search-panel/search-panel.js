import React from 'react';
import './search-panel.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class SearchPanel extends React.Component{

  state = {
    text: ''
  }

  setSearchText = (e) => {
    this.setState({text: e.target.value})
  };

  searchStart = () => {
    const {onSearchChange} = this.props;
    onSearchChange(this.state.text);
  }

  resetSearchResults = () => {
    const {onSearchChange} = this.props;
    this.setState({text: ""});
    onSearchChange("");
  }

  render(){
    return (
      <Router>
      <div className="input-group container">
        <input type="text"
                  className="form-control search-input"
                  placeholder="type to search"
                  onInput={this.setSearchText} />
        <div className="input-group-append">
          <Link
            to="/list"
            className="btn btn-outline-primary"
            onClick={this.searchStart}>
            Поиск
          </Link>
          <button
            className="btn btn-outline-primary"
            onClick={this.resetSearchResults}>
            Сбросить
          </button>
        </div>
      </div>
      </Router>
    );
  };
  
};
