import React, {useState,useEffect  } from "react";
import Productos from "../data/productos";
import ItemDetail from "./ItemDetail";
import {useParams}from "react-router-dom"
let promiseItem = new Promise ((resolve,reject)=>{
    setTimeout(
        () => {
    resolve(Productos)  ;
    
    },
    2000);
  });

const ItemDetailContainer = (props) => {
  const {id}=useParams()
    
      
      let [item,setItem] = useState({});
      useEffect(()=>{   
      promiseItem.then(
        (respuesta)=>{
         {
          const products =respuesta.filter(item=>item.id==id)
          setItem(products[0])
      
        }}
        ).catch ((errorMg)=>console.error((errorMg)))},
      [])

    return ( 
        <>
        <ItemDetail item={item}/>
       
      
        </>
     );
}
 
export default ItemDetailContainer;