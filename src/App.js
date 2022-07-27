import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <p>Oscar Abuto Achieng</p>
    </div>
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