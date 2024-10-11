import React, { useContext } from "react";
// import context file
import StoreContext from "../../context/StoreContext.jsx";
// import Link from react router dom
import { Link } from "react-router-dom";
// import css file
import "./cart.css";
import CartItem from "../../components/CartItem/CartItem.jsx";
import CartPaymentInfo from "../../components/CartPaymentInfo/CartPaymentInfo.jsx";
// import font awesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const { getTotalAmount } = useContext(StoreContext);

  return (
    <>
      <div className="cart">
        <div
          className={`cart-item-title ${
            getTotalAmount() == 0 ? "cart-item-title-flexible" : ""
          }`}
        >
          {getTotalAmount() == 0 ? (
            <div className="cart-empty-title">
              <FontAwesomeIcon icon={faBagShopping} className="fa-shopping" />
              <p className="cart-empty-heading">Your Cart is Empty</p>
              <button className="browse-button">
                <Link to={"/"} className="browse-item-link">
                  Browse Items
                </Link>
              </button>
            </div>
          ) : (
            <h1>Your Cart</h1>
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
