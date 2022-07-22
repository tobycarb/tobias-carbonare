import CartWidjet from "./CartWidjet";
import {Link} from "react-router-dom"
const NavBar  = () => {
    return (<nav class="navbar bg-dark  justify-content-between navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid barra display-flex justify-content-between">
      
      <Link class="navbar-brand text-white" to={"/"}>TOBinstrumentos</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse show" id="navbarNavAltMarkup">
        <div class="navbar-nav barra ">
          <Link class="nav-link text-white active" aria-current="page" to={"category/guit"}>guitarra electrica</Link>
          <Link class="nav-link text-white active" aria-current="page" to={"category/acus"}>guitarra acustica</Link>
          <Link class="nav-link text-white active" aria-current="page" to={"category/bajo"}>bajo </Link>
          <Link class="nav-link text-white active" aria-current="page" to={"category/piano"}>piano</Link>
          <Link class="nav-link text-white active" aria-current="page" to={"category/amp"}>apmlificador</Link>
        
        </div>
      </div>
    </div>
    <CartWidjet />
  </nav> );
}
 
export default NavBar ;