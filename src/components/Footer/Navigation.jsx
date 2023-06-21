import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <h5>Navegación</h5>
      <div className="d-flex flex-column m-1">
        <Link to={"/"}>Home</Link>
        <Link to={"/productos"}>Productos</Link>
        <Link to={"/contacto"}>Contacto</Link>
        <Link to={"/carrito"}>Carrito</Link>
      </div>
    </>
  );
};
export default Navigation;
