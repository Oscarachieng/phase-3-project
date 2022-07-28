import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Reviews from "./Reviews";
import MyCart from "./MyCart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/about" element={<About />} />

        <Route path="/mycart" element={<MyCart />} />

        <Route path="/reviews" element={<Reviews />} />

        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

/*
Components.
=============
--App
--Header (logo-name, Searchbar, other decos, NavBar )
--NavBar (Links/NavLinks)
--Introduction-(SideBar-category, Main-intro-slider, RightSideBar)
--ProductList conponent- (ProductItem, AddToCart),
--ProductDetails
--Reviews,
--NewLetterSubscription,
--AddCommentForm,
--Footer

App
   --Heder
      --SearchBar
      --NavBAR

   --Introduction
      --CategorySideBar(NavBarLinks )
      --MainINtroImage/Message
      --RightSideBar

   --ProductList
      --ProductItem
      --AddToCart
     
   --ProductDetails
   --Reviews
   --NewLetterSubscription   
   --Footer


*/
