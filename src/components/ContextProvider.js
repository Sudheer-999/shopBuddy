import React, { useState } from "react";
import ProductContext from "./ProductContext";

const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems((prevCount) => prevCount + 1);
  };

  const removeFromCart = () => {
    setCartItems((prevCount) => prevCount - 1);
  };

  return (
    <ProductContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ContextProvider;
