import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="upper-section">
        <h2 className="lydo">SmartLydo</h2>
        <SearchBar />
        <p className="likes">like</p>
        <p className="likes">like</p>
        <p className="likes">like</p>
      </div>
      <div className="lower-section">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
