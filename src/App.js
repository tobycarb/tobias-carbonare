import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
  <>
  <NavBar />;
  <ItemListContainer greeting={"bienvenidos a tobinstrumentos"} />
  </>
  )
}


export default App;
