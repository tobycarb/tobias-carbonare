import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./contexts/CartContext";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems } = useContext(CartContext);
  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseInt(item.price);
    });
    setTotalPrice(total);
  }, [cartItems]);
  return (
    <>
    
    
    <table class="table">
    <thead>
        <tr>
        <th>lista de productos</th>
      <th>precio</th>
      <th>total</th>
        </tr>
    </thead>
        {cartItems.map((item) => (
          <>
            <tbody>
                <tr>
                <td >{item.producto}</td>
            <td>${item.price}</td>
                </tr>
                <tr>
                
                </tr>
            </tbody>
            
            
          
          
          </>
        ))}
   <tr className="bg-check">
     <td  ><h2>total</h2></td>
                <td ></td>
            <td ><h2>${totalPrice}</h2></td>
            </tr>
   

      </table>
    </>
  );
};

export default Cart;
