import React, { createContext, useState } from "react";
import { productItems } from "../assets/assests";

const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState({});

  // function for add items into Cart
  const addToCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  // function for remove items into Cart
  const removeToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // function for subtotal of payment
  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = productItems.find((product) => product.id == item);
        totalAmount += itemInfo.price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const context = {
    productItems,
    cartItem,
    addToCart,
    removeToCart,
    getTotalAmount,
  };

  return (
    <StoreContext.Provider value={context}>{children}</StoreContext.Provider>
  );
};

export default StoreContext;
