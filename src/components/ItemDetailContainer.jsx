import React, {useState,useEffect  } from "react";
import Productos from "../data/productos";
import ItemDetail from "./ItemDetail";
import {useParams}from "react-router-dom"
import {getDoc,doc, getFirestore,collection,getDocs,query,where,limit} from "@firebase/firestore"
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
        const db =getFirestore();
        const docRef = doc(db,"items",id)
        getDoc(docRef).then((snapshot)=>{
          const data ={id: snapshot.id, ...snapshot.data()}
          setItem(data)
        });
      
    },[id]
      )

    return ( 
        <>
        <ItemDetail item={item}/>
       
      
        </>
     );
}
 
export default ItemDetailContainer;