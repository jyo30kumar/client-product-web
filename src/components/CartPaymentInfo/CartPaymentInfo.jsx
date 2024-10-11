import React from "react";
import "./cart-payment-info.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const CartPaymentInfo = ({getTotalAmount}) => {
  return (
    <>
      <div className="cart-payment-info">
        <div className="coupon-container">
          <h2>Coupons:</h2>
          <div className="coupon-info">
            <p>Coupon Code </p>
            <div className="coupon-selector">
              <p>Select Coupon</p>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>
        </div>
      <div className="cart-total-amount-info">
        <h2>Cart Totals:</h2>
        <div className="cart-total-detail">
          <p>Subtotal</p>
          <p>{getTotalAmount()}</p>
        </div>
        <div className="cart-total-detail">
          <p>Delivery Charges</p>
          <p>{10}</p>
        </div>
        <div className="cart-total-detail cart-total">
          <p>Total Amount</p>
          <p>{getTotalAmount() + 10}</p>
        </div>
        <button className="cart-proceed-button">Proceed</button>
      </div>
      </div>
    </>
  );
};

export default CartPaymentInfo;
