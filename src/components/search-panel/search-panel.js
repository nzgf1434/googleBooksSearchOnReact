import React, { useState } from "react";
import classes from "./search-panel.module.css";
import { withRouter } from "react-router-dom";

const SearchPanel = props => {
  const { setSearchString, resetSearch, searchStart, textForSearch } = props;
  const [colorize, setColorize] = useState(false);

  const keyEnterHandler = e => {
    if (e.key === "Enter") {
      searchStart(textForSearch);
      props.history.push("/");
    }
  };

  const clickHandler = () => {
    searchStart(textForSearch);
    props.history.push("/");
  };

  const inputChangeHandler = e => {
    setSearchString(e.target.value);
  };

  const focusHandler = () => setColorize(true);

  const blurHandler = () => setColorize(false);

  return (
    <div className={`${classes["input-group-margin"]} input-group container`}>
      <label
        htmlFor="searchPanel"
        className={`${classes["label-text"]} ${
          colorize ? classes.colorize : ""
        }`}
      >
        Google books search
      </label>
      <input
        id="searchPanel"
        type="text"
        className={`form-control ${classes.searchPanel}`}
        placeholder={"type to search"}
        value={textForSearch}
        onChange={inputChangeHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
        onKeyPress={keyEnterHandler}
      />
      <div className="input-group-append">
        <button className="btn btn-outline-primary" onClick={clickHandler}>
          Search
        </button>
        <button className="btn btn-outline-primary" onClick={resetSearch}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default withRouter(SearchPanel);
