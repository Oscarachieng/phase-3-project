import React, { useState, useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Reviews from "./Reviews";
import MyCart from "./MyCart";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import axios from "axios";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";
import Sign from "./Sign-up"
import Login from "./Login"

/* 
 1. declare product state variables
 2. useEffect Hook to in get request
 3. Update the state varaible
*/

function App() {
  // Initialize products state variables
  const [products, setProducts] = useState([]);
  const [isHovering, setIsHovering] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [itemsInCart, setItemsInCart] = useState([]);

  //function to handle
  const handleSearch = (textInput) => {
    setSearchText(textInput);
  };
  // Function to handle Add to Cart Click
  const handleAddToCartClick = (productToCart) => {
    setItemsInCart([...itemsInCart, productToCart]);
    console.log([...itemsInCart, productToCart]);
  };

  // Function to handle remove button click
  const handleRemoveButtonClick = (id) => {
    const onRemove = itemsInCart.filter((item) => item.id !== id);
    console.log(onRemove);
    setItemsInCart(onRemove);
  };

  const productsUrl = "http://localhost:9292/products";

  // Fetch data using axios
  useEffect(() => {
    axios
      .get(productsUrl)
      .then((response) => {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  console.log(products)
  return (
    <>
      <Header onSearch={handleSearch} />

      <Routes>
        <Route path="/about" element={<About />} />

        <Route
          path="/mycart"
          element={
            <MyCart
              itemsInCart={itemsInCart}
              onRemove={handleRemoveButtonClick}
            />
          }
        />

        <Route path="/reviews" element={<Reviews />} />

        <Route
          path="/"
          element={
            <Home
              products={products}
            />
          }
        ></Route>
        <Route
          path="/productlist"
          element={
            <ProductList
              products={products}
              searchText={searchText}
              isHovering={isHovering}
              setIsHovering={setIsHovering}
              onAddToCart={handleAddToCartClick}
            />
          }
        />
        <Route path="/productlist/:id" element={<ProductDetails
        products = {products}
        onAddToCart = {handleAddToCartClick} 
        />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
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
