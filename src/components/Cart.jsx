import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./contexts/CartContext";

const Cart = () => {
  
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems, removeItem, clear,setCartItems } = useContext(CartContext);
  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseInt(item.price);
    });
    setTotalPrice(total);
  }, [cartItems]);
  return (
    
    <>
   {
   [cartItems]==0 ?(
    <>
    no hay items, agrega nuevos productos! 
    </>
   ) : (
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
            <td><button onClick={()=> removeItem (item.id)}> eliminar</button></td>
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
      <button onClick={()=> clear()}>vaciar carrito</button>
      </>
   )}
    </>
  );
};

export default Cart;
