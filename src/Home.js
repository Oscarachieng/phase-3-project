import React, { useState } from "react";
import { Link } from "react-router-dom";
import IntroImageSlide from "./IntroImageSlide";

const Home = (props) => {
  const { products } = props;
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const uniqueCategory = [
    ...new Set(products.map((product) => product.category)),
  ];
  console.log(uniqueCategory);

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
                <div
                  key={prod.id}
                  style={{ display: "flex", marginBottom: "10px"}}
                 
                >
                  <h6 style={{ color: "chocolate" }}>{prod.title}</h6>
                  <img
                    src={prod.image_url}
                    alt="shop"
                    style={{
                      width: isHovering ? "70%" : "50%",
                      height: "200px",
                      marginRight: "100px",
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <Link to={"/productlist"} >
      <section
        style={{
          display: "flex",
          height: "50px",
          borderBottomColor: "black",
          border: "groove",
          borderWidth:"1px",
          color: "chocolate",
          justifyContent: "space-evenly",
          textDecoration: "none",
          paddingBottom: "20px"
        }}
      >
        {uniqueCategory.map((item) => (
         <h2 key={item}>{item}</h2>
        ))}
      </section>
      </Link>
    </div>
  );
};

export default Home;
