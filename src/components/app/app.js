import React, { Component } from "react";
import "./app.css";
import MainPage from "../../containers/main-page/main-page";
import DetailBooksItem from "../details-books-item";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App container">
          <Route
            exact
            path="/:id"
            render={({ match }) => {
              const { id } = match.params;
              return <DetailBooksItem itemId={id} />;
            }}
          />
          <Route 
          path="/"
          component={MainPage} />
        </div>
      </Router>
    );
  }
}

export default App;
