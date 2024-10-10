import React, { useContext } from "react";
import { productItems } from "../../assets/assests.js";
import StoreContext from "../../context/StoreContext.jsx";

const Cart = () => {

    const {cartItem, addToCart, removeToCart} = useContext(StoreContext);

    console.log(cartItem);
    

  return (
    <>
      <div className="cart">
        <div className="cart-item-title">
          <h1>Your Cart</h1>
        </div>
        <div className="cart-item-container">
          <div className="cart-item-category">
            <h2></h2>
            <div className="cart-items">
              <div className="cart-item-image">
                <img src="" alt="" />
              </div>
              <div className="cart-item-info"></div>
            </div>
          </div>
        </div>
        <div className="cart-payment-info"></div>
      </div>
    </>
  );
};

export default Cart;
