import React from "react";

const ProductDetails = () => {
  return (
    <section
      style={{
        witdth: "70%",
        minHeight: "400px",
        borderColor: "orange",
        borderStyle: "groove",
        borderWidth: "1px",
        marginLeft: "40px",
        marginRight: "40px",
        display : "flex",
        justifyContent : "space-around",
        alignItems: "center"
      }}
    >
     
      <section style={{width : "40%", borderColor: "orange",
        borderStyle: "groove",
        borderWidth: "1px", height: "300px"}}>image section</section>
      <section style={{width : "40%", borderColor: "orange",
        borderStyle: "groove",
        borderWidth: "1px", height: "300px"}}>
        production information, title, Price, Promotional message, Add to Cart
        Button
      </section>
    </section>
  );
};

export default ProductDetails;
