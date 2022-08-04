import React  from "react";
import { Link } from "react-router-dom";
import Cart from "./images/Cart.png"

// import { useParams } from "react-router-dom";
const ProductDetails = ({productForDetails, setDetails, onAddToCart}) => {
  const [productDetails] = productForDetails;
     const {id, title, price, description,image} = productDetails; 

     console.log(productForDetails)
  
  return (
    <section
      style={{
        witdth: "60%",
        height: "60%",
        borderColor: "orange",
        borderStyle: "groove",
        borderWidth: "1px",
        marginLeft: "10px",
        marginRight: "10px",
        display : "flex",
        justifyContent : "space-around",
        alignItems : "center"
      }}
    >
     
      <section style={{width : "100%", borderColor: "orange",
        borderStyle: "groove",
        borderWidth: "1px", height: "500px"}}><img src={image} alt="product" className="product-image-details"/></section>
      <section style={{width : "400px", borderColor: "orange",
        borderStyle: "groove",
        borderWidth: "1px", height: "500px", marginLeft : "20px", textAlign: "center"}}>
         <h1><span className="product-details">Product Title :</span><br/>{title}</h1> 
          
        <h5><span className="product-details">Description :</span><br/>{description}</h5>
        <h4><span className="product-details">Price :</span> {price}</h4>
        <Link to={"/mycart"}>
            <img src={Cart} alt= "Cart" style={{height : "30px"}} />

          </Link>
        <div style={{display : "flex" , width: "100%", justifyContent : "space-around"}}>
          <button className="details-buttons" onClick={()=>setDetails(false)}>Back</button>
         
          <button className="details-buttons" onClick={()=>onAddToCart(productDetails)}>Add to Cart</button>
        </div>
      </section>
    </section>
  );
};
 
export default ProductDetails;
