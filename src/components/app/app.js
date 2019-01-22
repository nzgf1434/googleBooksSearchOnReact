import React, { Component } from 'react';
import './app.css';
import BooksList from '../books-list';
import SearchPanel from "../search-panel";
import GoogleBooksService from '../../services/GoogleBooksService';
import DetailBooksItem from '../details-books-item';
import { BrowserRouter as Router, Route } from 'react-router-dom';



class App extends Component {

  state = {
    searchText: '',
    itemsBooks: null, 
    details: null
  }
  
  booksService = new GoogleBooksService();

  onSearchChange = (text) => {
    this.setState({searchText: text});
  }

  onDetailsClick = (id) => {
    const currentBook = this.state.itemsBooks.filter((item) => item.id === id);
    this.setState({details: currentBook[0]});
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchText && prevState.searchText !== this.state.searchText){
      this.booksService.getSearchResult(this.state.searchText)
      .then((res) => {
        this.setState(() => {
          return {itemsBooks: res.items}})
      })
    }
  }

  render() {

    // if (this.state.searchText && !this.state.details){
      if (this.state.searchText){
      return (
        <Router>
          <div className="App container">
            <Route path="/" 
                    render={() => <SearchPanel onSearchChange={this.onSearchChange}/>} 
              />
            <Route path="/list" 
                  render={() => <BooksList list={this.state.itemsBooks} onDetailsClick={this.onDetailsClick} />} exact
            />
            <Route path="/list/:id" 
                  render={() => <DetailBooksItem details={this.state.details} />}
                    // const { id } = match.params; itemId={id} 
                   
            />
          </div>
        </Router>
      );
    }
    // else if (this.state.details){
    //   return (
    //     <Router>
    //       <div className="App container">
    //         <SearchPanel onSearchChange={this.onSearchChange}/>
            
    //       </div>
    //     </Router>
    //   );
    // }
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
