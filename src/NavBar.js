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
      <NavLink to="/"  style={linkStyles}>
        Home
      </NavLink>

      <NavLink  to="/about"  style={linkStyles}>
        About
      </NavLink>
      <NavLink  to="/products"  style={linkStyles}>
        Products
      </NavLink>
      <NavLink   to="/cart" style={linkStyles}>
        Cart
      </NavLink>
      <NavLink   to="/reviews"  style={linkStyles}>
        Reviews
      </NavLink>
      <NavLink to="/sign-up"  style={linkStyles}>
        MyAccount
      </NavLink>

      <NavLink to="/login" exact style={linkStyles}>
        Sign-n
      </NavLink>
    </nav>
  );
};

export default NavBar;
