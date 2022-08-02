import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const clear =()=>{
    setCartItems([])}
    
  const removeItem =(id) => 
    setCartItems (cartItems.filter((item)=>item.id !== id))
  
 
  
  
  return (
    <CartContext.Provider value={{ cartItems, setCartItems, removeItem, clear }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
