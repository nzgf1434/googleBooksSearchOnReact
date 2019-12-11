import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import listReducer from "./store/reducers/listReducer";
import itemReducer from "./store/reducers/itemReducer";

const rootReducer = combineReducers({
  list: listReducer,
  item: itemReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
