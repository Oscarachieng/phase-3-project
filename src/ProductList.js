import React from "react";
import { Outlet } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductList = (props) => {
  const { products, searchText, isHovering, setIsHovering, onAddToCart } =
    props;

  // Filtering the product to display
  const productsToDisplay = products.filter((product) => {
    if (searchText === "") return true;
    return product.title.toLowerCase().includes(searchText.toLowerCase());
  });
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
      <Outlet />
      {productsToDisplay.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isHovering={isHovering}
          setIsHovering={setIsHovering}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
