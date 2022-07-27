import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./searchBar";

const Header = () => {
  return (
    <div className="header">
      <div className="upper-section">
        <h2 className="lydo">
          {/* {" "} */}
          Smart<span>Lydo</span>
        </h2>
        <div>
          <SearchBar />
        </div>
        <div className="image-container">
          <img
            src="../src/public/Assets/images/heart.png"
            height="5px"
            alt="like"
          />
          <img
            src="../src/public/Assets/images/carts.png"
            height="5px"
            alt="shopping-cart"
          />
          <img
            src="../src/public/Assets/images/13556223.jpg"
            height="5px"
            alt="may"
          />
        </div>
      </div>{" "}
      <div className="lower-section" style={{marginLeft:250}}>
        <NavBar />
      </div>{" "}
    </div>
  );
};

export default Header;
