import React from "react";
import { NavLink } from "react-router-dom";

// const linkStyles = {
//   display: "inline-block",
//   width: "50px",
//   padding: "6px",
//   margin: "0 20px 6px",
//   background: "orange",
//   textDecoration: "none",
//   color: "Black",
// };
// condtitionally style the active Link
const isActiveLink = ({ isActive }) => {
  return {
     fontWeight : isActive ? "bold" : "normal",
     color: isActive ? "white" : "black",
  }
}

const NavBar = () => {
  return (
    <nav className="navigation-buttons">
      <NavLink exact to="/"  style= {isActiveLink}>
        Home
      </NavLink>

      <NavLink to="/about" style={isActiveLink}>
        About
      </NavLink>

      <NavLink to="/mycart" style={isActiveLink}>
        MyCart
      </NavLink>
      <NavLink to="/reviews" style={isActiveLink}>
        Reviews
      </NavLink>
    </nav>
  );
};

export default NavBar;
