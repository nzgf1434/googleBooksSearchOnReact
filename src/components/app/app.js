import React, { Component } from "react";
import "./app.css";
import MainPage from "../../containers/main-page/main-page";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BookPage from "../../containers/book-page/book-page";

// todo: review как один из пунктов развития - стилизация по бему
// todo: review дело вкуса но роутинг можно вынести в отдельный файл
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
              return <BookPage itemId={id} />;
            }}
          />
          <Route exact path="/" component={MainPage} />
        </div>
      </Router>
    );
  }
}

export default App;
