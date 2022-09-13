import React from "react";
import { Link } from "react-router-dom";

const Womens = (props) => {
  const { products } = props;

  //filter electronics from products
  const womensArray = products.filter((product) => {
    if (product.category === "women's clothing") {
      return product;
    } else {
      return null;
    }
  });

  return (
    <>
      Electronics goes Here.
      <div style={{display:"flex", flexWrap: "wrap"}}>
      {womensArray.map((item) => {
        const { id, image_url, title, price, ratting } = item;
        return (
          <div
            style={{
              width: "250px",
              backgroundColor: "aliceblue",
              margin: "30px",
              textAlign: "center",
            }}
            key={id}
          >
            <img
              src={image_url}
              alt="Product"
              style={{ width: "200px", maxHeight: "150px" }}
            />
            <h4
              style={{
                width: "250px",
                fontSize: "medium",
                marginBottom: "0px",
              }}
            >
              {title}
            </h4>
            <div style={{ display: "flex" }}>
              <h5
                style={{ width: "250px", fontSize: "medium", color: "orange" }}
              >{`Price : ${price}`}</h5>
              <h5
                style={{ width: "250px", fontSize: "medium", color: "orange" }}
              >{`Rating : ${ratting}`}</h5>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              {/* <button
                      style={{
                        borderColor: "transparent",
                        color: "white",
                        backgroundColor: "orange",
                      }}
                      onMouseEnter={() => setIsHovering(product.id)}
                      onMouseLeave={() => setIsHovering(0)}
                      onClick={() => onAddToCart(product)}
                    >
                      Add To Cart
                    </button> */}
            </div>
          </div>
        );
      })}
      <Link to={"/"}>
        {" "}
        <button
          style={{
            borderColor: "transparent",
            color: "white",
            backgroundColor: "orange",
            height: "40px",
            fontSize: "large",
            marginTop: "20px",
            marginLeft: "170px",
            borderColor: "transparent"
          }}
        >
          back
        </button>
      </Link>
      </div>
      
    </>
  );
};
export default Womens;