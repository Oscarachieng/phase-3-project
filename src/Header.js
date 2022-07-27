import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./searchBar";

const Header = () => {
  return (
    <div className="header">
      <div className="upper-section">
        <h2 className="lydo">Smart<span>Lydo</span></h2>
        <SearchBar />
        <p className="likes">like</p>
        <p className="likes">like</p>
        <p className="likes">like</p>
      </div>
      <div className="lower-section">
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
