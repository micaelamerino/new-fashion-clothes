import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "../CartContent/CartWidget";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Navbar className="nav-bar d-flex flex-column gap-2">
        <Navbar.Brand onClick={() => navigate("/")} className="logo">
          New fashion clothes
        </Navbar.Brand>
        <Nav className="links-nav">
          <Link to={"/"}>Home</Link>
          <Link to={"/productos"}>Productos</Link>
          <Link to={"/contacto"}>Contacto</Link>
          <Link to={"/carrito"}>
            <CartWidget />
          </Link>
        </Nav>
    </Navbar>
  );
};

export default NavBar;
