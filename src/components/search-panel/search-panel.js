import React, { useState } from "react";
import "./search-panel.css";
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
    <div className={`input-group container ${colorize ? "colorize" : ""}`}>
      <label htmlFor="searchPanel">Google books search</label>
      <input
        id="searchPanel"
        type="text"
        className="form-control search-input"
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
