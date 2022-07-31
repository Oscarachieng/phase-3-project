// Cart Page
import React,{useState, useEffect} from "react";


const MyCart = (props) => {

  
  const { itemsInCart, onRemove } = props;
  const [amount, setAmount] = useState(0)

  // function to handle priceChanges
  const handlePrice = () => {
    let price = 0;
    itemsInCart.map (product => (price += product.price));
    setAmount(price)
  }

  useEffect (()=> {
    handlePrice()
  });

  console.log(itemsInCart);
  return (
    <section>
      {itemsInCart.length === 0 ? <h1 className="cart-header-empty">Shopping Cart is Empty</h1> : <h1 className="cart-header-filled">Picked Items</h1>}
      {itemsInCart.map((product) => 
      (<div className = "item-in-cart" >
          <img src={product.image} alt={product.title} className = "cart-image"/>
          
          <h4 className="cart-title">{product.title}</h4>
          
          <h2 className="cart-price">{product.price}</h2>
          <button className="remove-button" onClick={(() =>onRemove(product.id))}>Remove</button>
        </div>)
      )}
      <div className="amount">

        <h2><span id="amount-text">Total Amount :</span>   {amount}</h2>
      </div>
    </section>
  );
};
export default MyCart;
