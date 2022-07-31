import React from "react";

import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import IntroImageSlide from "./IntroImageSlide";

const Home = (props) => {
  const {
    products,
    isHovering,
    setIsHovering,
    searchText,
    onAddToCart,
  } = props;
  // Combining the two product list (products,amazonProducts)
  // const generalProductList = [...products,...amazonProducts];
  // console.log(generalProductList);
  // console.log(products);
  return (
    <div>
      <div
        className="introduction"

      >
        <div
          className="category-side-bar"
         
        >
          <p>Product Categories</p>
          {products.map((product) => {
            if (
              product.id === 1 ||
              product.id === 2 ||
              product.id === 5 ||
              product.id === 6 ||
              product.id === 9 ||
              product.id === 10 ||
              product.id === 17 ||
              product.id === 19
            ) {
              return <h4 style={{color
                :"orange", textAlign : "center",fontSize: "small" }}>{product.category}</h4>;
            }
          })}
        </div>
        <div
          className="side-show-container"
          style={{
            height: "400px",
            width: "600px",
         
            borderWidth: "1px",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
        
          {/* <IntroMessage /> */}
          <IntroImageSlide products= {products} />
        </div>
        <div
          className="right-side-bar"
          style={{
            height: "400px",
            width: "200px",
            borderColor: "orange",
            borderWidth: "1px",
            borderStyle: "groove",
          }}
        >
          Right side bar
          {/* <RightSideBar /> */}
        </div>
      </div>
      <ProductDetails products={products} isHovering={isHovering} />
      <ProductList
        setIsHovering={setIsHovering}
        products={products}
        isHovering={isHovering}
        searchText={searchText}
        onAddToCart={onAddToCart}
      />
    </div>
  );
};

export default Home;
