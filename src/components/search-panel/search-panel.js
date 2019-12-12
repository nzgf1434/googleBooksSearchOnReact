import React, { useState } from "react";
import "./search-panel.css";
import { withRouter } from "react-router-dom";

const SearchPanel = props => {
  const { setSearchString, resetSearch, searchStart, textForSearch } = props;
  const [colorize, setColorize] = useState(false);

  return (
    <div className={`input-group container ${colorize ? "colorize" : ""}`}>
      <label htmlFor="searchPanel">Google books search</label>
      <input
        id="searchPanel"
        type="text"
        className="form-control search-input"
        placeholder={"type to search"}
        value={textForSearch}
        // todo: review обработчик вынести
        onChange={e => {
          setSearchString(e.target.value);
        }}
        // todo: review обработчик вынести
        onFocus={() => {
          setColorize(true);
        }}
        // todo: review обработчик вынести
        onBlur={() => {
          setColorize(false);
        }}
        // todo: review обработчик вынести
        // todo: чтобы такой велосипед не писать юзай форму, у нее onSubmit есть
        onKeyPress={e => {
          if (e.key === "Enter") {
            searchStart(textForSearch);
            props.history.push("/");
          }
        }}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-primary"
          // todo: review обработчик вынести
          onClick={() => {
            searchStart(textForSearch);
            props.history.push("/");
          }}
        >
          Search
        </button>
        // todo: review обработчик вынести - обернуть resetSearch в обработчик
        <button className="btn btn-outline-primary" onClick={resetSearch}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default withRouter(SearchPanel);
