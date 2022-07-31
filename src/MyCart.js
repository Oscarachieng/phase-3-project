// Cart Page
import React from "react";

const MyCart = (props) => {
  const { itemsInCart, onRemove } = props;
  console.log(itemsInCart);
  return (
    <section>
      {itemsInCart.length === 0 ? <h1>My Shopping Cart is Empty</h1> : <h1>Picked Items.</h1>}
      {itemsInCart.map((product) => 
      (<div style={{display : "flex", justifyContent : "space-evenly"}}>
          <img src={product.image} alt={product.title} style ={{width : "120px"}}/>
          <h1 style={{width: "200px"}}>{product.title}</h1>
          <h2>{product.price}</h2>
          <button onClick={(() =>onRemove(product.id))}>Remove</button>
        </div>)
      )}
    </section>
  );
};
export default MyCart;
