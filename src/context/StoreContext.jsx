import React, { createContext, useEffect, useState } from "react";

const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState({});

  const addToCart = (itemId)=> {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  }

  const removeToCart= (itemId)=> {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);

  const context = {
    cartItem,
    addToCart,
    removeToCart,
  };

  return (
    <StoreContext.Provider value={context}>{children}</StoreContext.Provider>
  );
};

export default StoreContext;
