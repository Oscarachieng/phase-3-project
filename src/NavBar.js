import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "6px",
    margin: "0 20px 6px",
    background: "orange",
    textDecoration: "none",
    color: "Black",
  };

const NavBar = () => {
  return (
    <nav className="navigation-buttons">
      <NavLink to="/" exact  style={linkStyles}>
        Home
      </NavLink>

      <NavLink to="/about" exact style={linkStyles}>
        About
      </NavLink>
      <NavLink to="/productlist" exact style={linkStyles}>
        ProductList
      </NavLink>
      <NavLink to="/cart" exact style={linkStyles}>
        Cart
      </NavLink>
      <NavLink to="/reviews" exact style={linkStyles}>
        Reviews
      </NavLink>
      <NavLink to="/sign-up" exact style={linkStyles}>
        MyAccount
      </NavLink>

      <NavLink to="/login" exact style={linkStyles}>
        Sign-n
      </NavLink>
    </nav>
  );
};

export default NavBar;
