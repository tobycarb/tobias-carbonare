// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import  'bootstrap/dist/css/bootstrap.min.css' ;
// import ItemListContainer from './components/ItemListContainer';
// import ItemCount from "./components/ItemCount";
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
  <>
   
  <BrowserRouter>
  <NavBar />;
  <Link to={"/detail"}>
      <button> llevame a los detalles</button>
    </Link>
  <Routes>
   
  <Route index  element={<ItemListContainer />} />
  <Route path="/category/:name" element ={<ItemListContainer /> }/>
    <Route path='/item/:id' element= {<ItemDetailContainer/>} />
  
    </Routes>
 
  {/* <ItemCount stock={10} initial={1}/> */}
  {/* <ItemListContainer greeting={"bienvenidos a tobinstrumentos"} /> */}
  
  
  <hr/>
  </BrowserRouter>

  </>
  )
}


export default App;
