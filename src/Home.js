import React from "react";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <div>
      <div
      className="introduction"
      style={{
        display: "flex",
        marginLeft: "120px",
        width: "80%",
        alignContent: "center",
        height: "420px",

      }}
    >
      <div
        className="category-side-bar"
        style={{
          height: "400px",
          width: "150px",
          borderColor: "orange",
          borderStyle: "groove",
          borderWidth : "1px",
        }}
      >
        <p style={{ color: "orange" }}>Home side bar</p>
        {/* <CategorySibar /> */}
      </div>
      <div
        className="intro-message"
        style={{
          height: "400px",
          width: "600px",
          borderColor: "orange",
          borderStyle: "groove",
          borderWidth : "1px",
          marginLeft : "20px",
          marginRight : "20px"
        }}
      >
        image slider
        {/* <IntroMessage /> */}
      </div>
      <div
        className="right-side-bar"
        style={{
          height: "400px",
          width: "200px",
          borderColor: "orange",
          borderWidth : "1px",
          borderStyle: "groove",
        }}
      >
        Right side bar
        {/* <RightSideBar /> */}
      </div>
    
    </div>
    <ProductList />
    </div>
  );
};

export default Home;
