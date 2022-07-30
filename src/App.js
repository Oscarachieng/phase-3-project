import React, { useState, useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Reviews from "./Reviews";
import MyCart from "./MyCart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import axios from "axios";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";

/* 
 1. declare product state variables
 2. useEffect Hook to in get request
 3. Update the state varaible
*/

function App() {
  // Initialize products state variables
  const [products, setProducts] = useState([]);
  const [amazonProducts, setAmazonProducts] = useState ([])
  const [isHovering, setIsHovering] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [itemsInCart, setItemsInCart] = useState([]);

 //function to handle
 const handleSearch = (textInput) => {
   setSearchText(textInput);
 }
 // Function to handle Add to Cart Click
 const HandleAddToCartClick = (productToCart) => {
    setItemsInCart([...itemsInCart, productToCart]);
    // let navigate = useNavigate();
    // navigate("/mycart");
 }

 //fetch Products from Amazon API
 useEffect (()=> {
  const options = {
    method: 'GET',
    url: 'https://amazon23.p.rapidapi.com/product-search',
    params: {query: 'xbox', country: 'US'},
    headers: {
      'X-RapidAPI-Key': '7310622931msh9f6735caf0bf519p1c820cjsn2c95afa5cfdc',
      'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
    }
  };
  
  axios.get('https://amazon23.p.rapidapi.com/product-search',options).then(function (response) {
    setAmazonProducts(response.data.result)
  }).catch(function (error) {
    console.error(error);
  });
 },[])
 

  const productsUrl = "https://fakestoreapi.com/products";

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
  return (
    <Router>
      <Header onSearch = {handleSearch}/>

      <Routes>
        <Route path="/about" element={<About />} />

        <Route path="/mycart" element={<MyCart itensInCart={itemsInCart}/>} />

        <Route path="/reviews" element={<Reviews />} />

        <Route
          path="/"
          element={
            <Home
              products={products}
              amazonProducts = {amazonProducts}
              isHovering={isHovering}
              setIsHovering={setIsHovering}
              searchText = {searchText}
              onAddToCart = {HandleAddToCartClick}
            />
          }
        >
          <Route path="/productlist" element={<ProductList />}>
            <Route path=":id" element={<ProductDetails />} />
          </Route>
        </Route>
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
