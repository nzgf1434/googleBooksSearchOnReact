import React, { Component } from 'react';
import './app.css';
import BooksList from '../books-list';
import SearchPanel from "../search-panel";
import GoogleBooksService from '../../services/GoogleBooksService';



class App extends Component {

  state = {
    searchText: '',
    itemsBooks: null
  }
  
  booksService = new GoogleBooksService();

  onSearchChange = (text) => {
    this.setState({searchText: text});
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(`prev: ${prevState.searchText}, now: ${this.state.searchText}`);

    if (this.state.searchText && prevState.searchText !== this.state.searchText){
      this.booksService.getSearchResult(this.state.searchText)
      .then((res) => {
        this.setState(() => {return {itemsBooks: res.items}})
      })
    }
  }

  render() {
    if (this.state.searchText){
      return (
        <div className="App container">
          <SearchPanel onSearchChange={this.onSearchChange}/>
          <BooksList list={this.state.itemsBooks}/>
        </div>
      );
    }
    else {
      return (
        <div className="App container">
          <SearchPanel onSearchChange={this.onSearchChange}/>
        </div>
      )
    }
    
  }
}

export default App;
