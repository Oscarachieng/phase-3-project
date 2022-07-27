import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {

    return (
        <nav>
            <NavLink 
            to= "/"
            exact

             >
                Home
            </NavLink>

            <NavLink 
            to= "/about"
            exact
            
             >
                About
            </NavLink>
            <NavLink 
            to= "/productlist"
            exact
            
             >
                ProductList
            </NavLink>
            <NavLink 
            to= "/cart"
            exact
            
             >
                Cart
            </NavLink>
            <NavLink 
            to= "/reviews"
            exact
            
             >
                Reviews
            </NavLink>
            <NavLink 
            to= "/sign-up"
            exact
            
             >
                MyAccount
            </NavLink>

            <NavLink 
            to= "/login"
            exact
            
             >
                Sign-n
            </NavLink>
        </nav>

    )
}

export default NavBar;