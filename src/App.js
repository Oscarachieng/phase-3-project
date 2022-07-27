import React from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Header />
      <p>Oscar Abuto Achieng</p>
      <Home />

      <Routes>
        {/* <Routes>
         <Route path='/about' >
           <About />
         </Route>
         <Route path='/productlist' >
           <ProductList />
         </Route>
         <Route path='/cart' >
           <Cart />
         </Route>
         <Route path='/reviews' >
           <Reviews />
         </Route>
         <Route path='/sign-up' >
           <MyAccount />
         </Route>
         <Route path='/login' >
           <Sign-in />
         </Route>
         <Route path= "/" >
           <Home /> 
         </Route>
      </Routes> */}
        {/* <Route path="/" element ={<Home />} /> */}
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
