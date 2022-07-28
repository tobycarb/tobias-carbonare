import React from "react";
import { useState,useContext } from "react";
import ItemCount from "./ItemCount";
import { useNavigate, Link} from "react-router-dom";
import { CartContext } from "./contexts/CartContext";
const ItemDetail = ({item}) => {
    const {setCartItems} = useContext(CartContext)
    const [amount,setAmount]=useState(0)
    
    const onAdd = (amount) => {
        setAmount(amount)
        setCartItems((prevState)=>  [...prevState,item])
        
    }
    return ( 
        <>
        <div class="card cartera "style={{width:780}} key={item.id}>
                        <p class="text-center h3 card-title cartera">{item.producto}</p>
                       
                        <img class="card-img cartera" style={{height:400}} src={item.img} alt="" />
                        <p class="cartera">{item.category}</p>
                        <p class="h2 cartera">${item.price}</p>
                        <p class ="h2"> ${item.categoria}</p>
                        
                      
                    {amount==0 ?  <ItemCount class="cartera" stock={10} initial={1} onAdd={onAdd}/> : <h1 >felicidades, compraste {amount} unidades</h1>}
                      
                       <Link to={"/Cart"}> <button> checkout!!</button></Link> 
                    </div>
                
                   
        </>
        
     );
}
 
export default ItemDetail;