// Cart Page
import React from "react";

const MyCart = (props) => {
  const { itemsInCart, onRemove } = props;
  console.log(itemsInCart);
  return (
    <section>
      My Shopping Bus{" "}
      {itemsInCart.map((product) => 
      (<div>
          <img src={product.image} alt={product.title} style ={{width : "120px"}}/>
          <h1>{product.title}</h1>
          <h2>{product.price}</h2>
          <button onClick={(() =>onRemove(product.id))}>Remove</button>
        </div>)
      )}
    </section>
  );
};
export default MyCart;
