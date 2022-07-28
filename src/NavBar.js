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
      <NavLink exact to="/" style={linkStyles}>
        Home
      </NavLink>

      <NavLink to="/about" style={linkStyles}>
        About
      </NavLink>

      <NavLink to="/mycart" style={linkStyles}>
        MyCart
      </NavLink>
      <NavLink to="/reviews" style={linkStyles}>
        Reviews
      </NavLink>
    </nav>
  );
};

export default NavBar;
