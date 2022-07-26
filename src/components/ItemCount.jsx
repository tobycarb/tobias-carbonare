import Reac, {useState} from 'react';


const ItemCount = ({stock=10, initial=0, onAdd}) => {
    const [count,setCount]=useState(initial);
    function sumar(){if(count<stock){
        setCount(count+1)};
    }
    function quitar(){
     if (count>=2)  { setCount(count-1)};
    }
    function finalizar(){
        alert("se agregaron " + count + " productos")
    }
    return ( <>
    <h2>quedan 10 unidades</h2>
    <h2>comprar</h2>
    <div>
        <button onClick={quitar}>-</button>
        <span>{count}</span>
        <button onClick={sumar}>+</button>
        <div>
            <button onClick={() => onAdd (count)}>agregar al carrito</button>
        </div>
    </div>
    </> );
}
 
export default ItemCount;