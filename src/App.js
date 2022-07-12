import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import ItemListContainer from './components/ItemListContainer';
import ItemCount from "./components/ItemCount";

function App() {
  return (
  <>
  <NavBar />;
  {/* <ItemCount stock={10} initial={1}/> */}
  <ItemListContainer greeting={"bienvenidos a tobinstrumentos"} />
  <hr/>
 

  </>
  )
}


export default App;
