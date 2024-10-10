import React, { memo, useContext, useEffect } from "react";
// import context file
import StoreContext from "../../context/StoreContext.jsx";

import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem.jsx";
import CartPaymentInfo from "../../components/CartPaymentInfo/CartPaymentInfo.jsx";

const Cart = () => {
  const { getTotalAmount } = useContext(StoreContext);

  return (
    <>
      <div className="cart">
        <div className="cart-item-title">
          <h1>{getTotalAmount() == 0 ? "Your Cart is Empty" : "Your Cart"}</h1>
          {getTotalAmount() == 0 && (
            <button>
              <Link to={"/"}>Browse Items</Link>
            </button>
          )}
        </div>
        {getTotalAmount() !== 0 && (
          <>
            <CartItem />
            <CartPaymentInfo getTotalAmount={getTotalAmount} />
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
