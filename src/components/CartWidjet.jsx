import ItemDetail from "./ItemDetail";
import { useContext } from "react";
import { CartContext } from "./contexts/CartContext";

const CartWidjet = () => {
  const { cartItems } = useContext(CartContext);

const numero = 0 ;
    return ( 
        <>
        <button class="botonNav">
        <img style={{width:50
        }}
         src="https://cdn-icons-png.flaticon.com/512/107/107831.png?w=826&t=st=1657168437~exp=1657169037~hmac=106d22e92dc87da29c98e7147c5cd309e11416e2ea63615ebc8513f5d8077222" alt="" />
           {cartItems.length}
         </button>
       
        </>
     );
}
 
export default CartWidjet;