import React from "react";

const SearchBar = () => {
  return (
    <React.Fragment >
      <input
        type="text"
        name="search-input"
        className="search"
        placeholder="Enter product Name or Categoty"
      />
      <button id="search-button">Search</button>
    </React.Fragment>
  );
};

export default SearchBar;
