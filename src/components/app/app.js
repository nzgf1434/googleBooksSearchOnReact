import React, { Component } from "react";
import "./app.css";
import BooksList from "../books-list";
import SearchPanel from "../search-panel";
import DetailBooksItem from "../details-books-item";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  // state = {
  //   searchText: "",
  //   itemsBooks: null,
  //   details: null
  // };

  // onSearchChange = text => {
  //   this.setState({ searchText: text });
  // };

  // onResetSearch = () => {
  //   this.setState({
  //     searchText: "",
  //     itemsBooks: null
  //   });
  // };

  // onDetailsClick = id => {
  //   const currentBook = this.state.itemsBooks.filter(item => item.id === id);
  //   this.setState({ details: currentBook[0] });
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     this.state.searchText &&
  //     prevState.searchText !== this.state.searchText
  //   ) {
  //     googleBooksGetListService(this.state.searchText).then(res => {
  //       this.setState(() => {
  //         return { itemsBooks: res.items };
  //       });
  //     });
  //   }
  // }

  render() {
    return (
      <Router>
        <div className="App container">
          <Route component={SearchPanel} />
          <Route exact path="/list" component={BooksList} />
          <Route
            exact
            path="/list/:id"
            render={({ match }) => {
              const { id } = match.params;
              return <DetailBooksItem itemId={id} />;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
