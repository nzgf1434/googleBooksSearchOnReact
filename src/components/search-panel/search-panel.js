import React from 'react';

import './search-panel.css';

export default class SearchPanel extends React.Component{

  state = {
    text: ''
  }

  setSearchText = (e) => {
    this.setState({text: e.target.value})
  };

  searchStart = () => {
    const {onSearchChange} = this.props;
    // let searchString = e.target.value;
    // this.setState({text: searchString});
    onSearchChange(this.state.text);
  }

  resetSearchResults = () => {
    const {onSearchChange} = this.props;
    this.setState({text: ""});
    onSearchChange("");
  }


  render(){
    return (
      <div className="input-group container">
        <input type="text"
                  className="form-control search-input"
                  placeholder="type to search"
                  onInput={this.setSearchText} />
        <div className="input-group-append">
          <button
            className="btn btn-outline-primary"
            onClick={this.searchStart}>
            Поиск
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={this.resetSearchResults}>
            Сбросить
          </button>
        </div>
        
      </div>
    );
  };
  
};
