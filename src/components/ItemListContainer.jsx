import React, {useState,useEffect  } from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    const ItemsDATABASE=[{
        "id": 1,
        "producto": "amplificador",
        "price": 1098,
        "category": "Family Dollar Services Inc.",
        "stock": 1,
        "img": "https://http2.mlstatic.com/D_NQ_NP_901927-MLA49434504972_032022-O.webp"
      }, {
        "id": 2,
        "producto": "guitarra electrica",
        "price": 1265,
        "category": "Glenmark Generics Inc., USA",
        "stock": 9,
        "img": "http://d3ugyf2ht6aenh.cloudfront.net/stores/969/083/products/grg1-444a37321c9eb2218d16494229008612-640-0.jpg"
      }, {
        "id": 3,
        "producto": "guitarra acustica",
        "price": 979,
        "category": "Wyeth BioPharma Division of Wyeth Pharmaceuticals Inc., a subsidiary of Pfizer Inc.",
        "stock": 3,
        "img": "https://www.tiposdeguitarra.com/wp-content/uploads/2020/05/guitarraacu%CC%81stica-0-Somsak-Sudthangtum-40950045_l-scaled-1.jpg"
      }, {
        "id": 4,
        "producto": "bajo",
        "price": 692,
        "category": "NCS HealthCare of KY, Inc dba Vangard Labs",
        "stock": 10,
        "img": "https://media.istockphoto.com/photos/closeup-photo-of-bass-guitar-player-picture-id651209608?k=20&m=651209608&s=612x612&w=0&h=AiB7XH40Akl40uf8alG9Imq4CQA-4wGAx8mvd4TOAKM="
      }, {
        "id": 5,
        "producto": "piano",
        "price": 123,
        "category": "Woori Health Promotion Town",
        "stock": 2,
        "img": "https://dynamix-audio.com/wp-content/uploads/2019/11/Grand-Piano.jpg"
      }, ];
      console.log("%c render itemlistcontainer","color:green");
      ;
      let [items,setItems] = useState([]);
      useEffect(()=>{    let promiseItems = new Promise ((resolve,reject)=>{
        setTimeout(
            () => {
        resolve(ItemsDATABASE)  ;
        
        },
        2000);
      });
      promiseItems.then(
        (respuesta)=>{
          setItems(ItemsDATABASE);
        }
        ).catch ((errorMg)=>console.error((errorMg)))},
      [])

    return ( 
        <>
        <ItemList items={items}/>
        {console.log(items)}
        <p>{props.greeting}</p>
        </>
     );
}
 
export default ItemListContainer;