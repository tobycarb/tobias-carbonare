import CartWidjet from "./CartWidjet";

const NavBar  = () => {
    return (<nav class="navbar bg-dark  justify-content-between navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid barra display-flex justify-content-between">
      <a class="navbar-brand text-white" href="#">tobinstrumentos musicales</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse show" id="navbarNavAltMarkup">
        <div class="navbar-nav barra ">
          <a class="nav-link text-white active" aria-current="page" href="#">inicio</a>
          <a class="nav-link text-white" href="#">productos</a>
          <a class="nav-link text-white" href="#">contacto</a>
          <a class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">foro</a>
        </div>
      </div>
    </div>
    <CartWidjet />
  </nav> );
}
 
export default NavBar ;