import React, { useContext } from "react";
import StoreContext from "../../context/StoreContext";
// import font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
// import css
import "./cart-item.css";

const CartItem = () => {
  const { cartItem, addToCart, removeToCart, productItems } =
    useContext(StoreContext);
  return (
    <>
      <div className="cart-items-container">
        {productItems.map((item) => {
          if (cartItem[item.id]) {
            return (
              <div className="cart-items" key={item.id}>
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-quantity-selector">
                    <FontAwesomeIcon
                      icon={faMinus}
                      className="remove-cart-item"
                      onClick={() => removeToCart(item.id)}
                    />
                    <span className="count-text">{cartItem[item.id]}</span>
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="add-cart-item"
                      onClick={() => addToCart(item.id)}
                    />
                  </div>
                </div>
                <div className="cart-item-info">
                  <p>{item.name}</p>
                  <p>
                    Price: <span> {item.price}</span>
                  </p>
                  <p>
                    Total Price: <span>{item.price * cartItem[item.id]}</span>
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default CartItem;
