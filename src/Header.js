import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./searchBar";
import Cart from "./images/Cart.png";
import Like from "./images/Like.png";
import Ec2 from  "./images/Ec2.png"

const Header = ({ onSearch }) => {
  return (
    <div className="header">
      <div className="upper-section">
        <h2 className="lydo">
          {/* {" "} */}
          Smart<span>Lydo</span>
        </h2>
        <div>
          <SearchBar onSearch = {onSearch} />
        </div>
        <div className="image-container">
          <img
            src={Like}
            height="40px"
            alt="like"
          />
          <img
            src={Cart}
            height="40px"
            alt="shopping-cart"
          />
          <img
            src={Ec2}
            height="30px"
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
