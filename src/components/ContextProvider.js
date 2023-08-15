import React, { useState } from "react";
import ProductContext from "./ProductContext";

const ContextProvider = ({ children }) => {
  const [cartItemsList, setCartItemsList] = useState([]);
  const [cartItems, setCartItems] = useState(cartItemsList.length);

  const addToCart = () => {
    setCartItems((prevCount) => prevCount + 1);
  };

  const removeFromCart = () => {
    setCartItems((prevCount) => prevCount - 1);
  };

  return (
    <ProductContext.Provider
      value={{
        cartItems,
        addToCart,
        setCartItemsList,
        cartItemsList,
        removeFromCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ContextProvider;
