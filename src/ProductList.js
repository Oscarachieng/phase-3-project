import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <div
      style={{
        minHeight: "400px",
        borderColor: "orange",
        borderStyle: "groove",
        borderWidth: "1px",
        marginLeft: "40px",
        marginRight: "40px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {products.map((product) => {
        return (
          <div
            style={{
              width: "250px",
              backgroundColor: "aliceblue",
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={product.image}
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
              {product.title}
            </h4>
            <div style={{ display: "flex" }}>
              <h5
                style={{ width: "250px", fontSize: "medium", color: "orange" }}
              >{`Price : ${product.price}`}</h5>
              <h5
                style={{ width: "250px", fontSize: "medium", color: "orange" }}
              >{`Rating : ${product.rating.rate}`}</h5>
            </div>
            <Link to={`/home/${product.id}`}>Product Details</Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
