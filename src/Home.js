import React from "react";
import IntroImageSlide from "./IntroImageSlide";
import Shop from "./images/Shop.jpg";
import Cart from "./images/Cart.png";

const Home = (props) => {
  const { products } = props;

  const uniqueCategory = [...new Set(products.map(product => product.category))]
  console.log(uniqueCategory)

  return (
    <div>
      <div className="introduction">
        <div
          className="side-show-container"
          style={{
            height: "400px",
            width: "1000px",
            backgroundColor: "lightslategrey",
            borderWidth: "1px",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          {/* <IntroMessage /> */}
          <IntroImageSlide products={products} />
        </div>
        <div
          className="right-side-bar"
          style={{
            height: "400px",
            width: "500px",
            borderColor: "transparent",
            borderWidth: "1px",
            borderStyle: "groove",
          }}
        >
          {products
            .filter((product) => product.id === 13 || product.id === 8)
            .map((prod) => {
              return (
                <div key={prod.id} style= {{display : "flex", marginBottom : "10px"}}>
                   <h6 style={{color: "chocolate"}}>{prod.title}</h6>
                  <img
                    src={prod.image_url}
                    alt="shop"
                    style={{
                      width: "50%",
                      height: "200px",
                      marginRight: "100px",
                    }}
                  />
                 
                </div>
              );
            })}
        </div>
      </div>
      {/* <ProductDetails products={products} isHovering={isHovering} /> */}
      <em className="cart-link">
        <span>Note :</span>Click on{" "}
        <img src={Cart} alt="Cart" style={{ height: "30px", width: "70%" }} />{" "}
        on product cards to see Your shopping Cart.{" "}
      </em>
    </div>
  );
};

export default Home;
