import React from "react";

const SearchBar = ({ onSearch }) => {

  //function to handle onchange event
  const handleSearchChange= (e) => {
     onSearch(e.target.value);
  };

  // function to Click event on search button

  // const handleSearchClick = (e) => {
  //   e.preventDefault();
  //   onSearch(e.target.value)
  // }
  return (
    <React.Fragment >
      <form >
      <input
        type="text"
        name="search-input"
        className="search"
        onChange={handleSearchChange}
        placeholder="Enter product Name or Categoty"
      />
      <button type ="submit"  id="search-button" >Search</button>
      </form>
    </React.Fragment>
  );
};

export default SearchBar;
