import React from "react";
import "./search-panel.css";

const SearchPanel = (props) => { 
  const { setSearchString, resetSearch, searchStart, textForSearch } = props;
  
  return (
    <div className="input-group container">
      <label htmlFor="searchPanel">Google books search</label>
      <input
        id="searchPanel"
        type="text"
        className="form-control search-input"
        placeholder={"type to search"}
        value={textForSearch}
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
        onKeyPress={e => {
          if (e.key === "Enter") {
            searchStart(textForSearch);
          }
        }}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-primary"
          onClick={() => searchStart(textForSearch)}
        >
          Search
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={resetSearch}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default SearchPanel;
