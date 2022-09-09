import React  from "react";
import { Link , useParams } from "react-router-dom";
import Cart from "./images/Cart.png"

// import { useParams } from "react-router-dom";
const ProductDetails = ({products, onAddToCart }) => {
  // const [productDetails] = productForDetails;
  //    const {id, title, price, description,image} = productDetails; 
     const params = useParams()
     console.log(params);
     console.log(products);

     const my_product = products.find((product) => product.id === parseInt(params.id));
     console.log(my_product);
    //  const [ prod ] = my_product
     const {id, title, price, description,image_url} = my_product; 

  
  return (
    <section
      style={{
        witdth: "40%",
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
     
      <section key={id} style={{width : "80%", borderColor: "orange",
        borderStyle: "groove",
        borderWidth: "1px", height: "500px"}}><img src={image_url} alt="product" className="product-image-details"/></section>
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
         <Link to = {'/productlist'} ><button className="details-buttons" >Back</button></Link>
         
          <button className="details-buttons" onClick={()=>onAddToCart(my_product)}>Add to Cart</button>
        </div>
      </section>
    </section>
  );
};
 
export default ProductDetails;
