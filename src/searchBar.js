import React from "react";

const SearchBar = () => {
  return (
    <React.Fragment className="search-bar">
      <input
        type="text"
        name="search-input"
        className="search"
        placeHolder="Enter product Name or Categoty"
      />
      <button id="search-button">Search</button>
    </React.Fragment>
  );
};

export default SearchBar;
