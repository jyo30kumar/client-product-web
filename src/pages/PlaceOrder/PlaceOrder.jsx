import React from "react";
// import css
import "./place-order.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faBackward } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="place-order">
        <div className="order-title">
          <h1>
            {" "}
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="fa-angle-left"
              onClick={() => navigate(-1)}
            />
            Delivery Information
          </h1>
        </div>
        <div className="delivery-info">
          <form className="delivery-info-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              id="firstName"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              id="lastName"
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              id="address"
              required
            />
            <input
              type="text"
              placeholder="State"
              name="state"
              id="state"
              required
            />
            <input
              type="number"
              placeholder="Zip Code"
              name="zipCode"
              id="zipCode"
              required
            />
            <input
              type="number"
              placeholder="Phone Number"
              name="number"
              id="number"
              required
            />
            <button>PROCEED FOR PAYMENT</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
