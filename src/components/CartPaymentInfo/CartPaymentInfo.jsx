import React from "react";
import "./cart-payment-info.css"

const CartPaymentInfo = ({getTotalAmount}) => {
  return (
    <>
      <div className="cart-payment-info">
        <div className="coupon">
          <h2>Coupons:</h2>
          <div className="coupon-info">
            <p>Coupon Code: </p>
            <div className="coupon-selector">
              <p>Select Coupon</p>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-total-amount">
        <h2>Cart Totals:</h2>
        <div className="cart-total-detail">
          <p>Subtotal</p>
          <p>{0}</p>
        </div>
        <div className="cart-total-detail">
          <p>Delivery Charges</p>
          <p>{10}</p>
        </div>
        <div className="cart-total-detail">
          <p>Total</p>
          <p>{getTotalAmount() + 10}</p>
        </div>
      </div>
      <button>Place Order</button>
    </>
  );
};

export default CartPaymentInfo;
