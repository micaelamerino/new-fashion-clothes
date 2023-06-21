import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "../CartContent/CartWidget";

const NavBar = () => {
  const navigate = useNavigate();

  return (
      <Navbar collapseOnSelect expand="lg" className="nav">
        <Container className="container-navbar">
          <Navbar.Brand onClick={() => navigate("/")} className="logo">
            New fashion clothes
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/"}>Home</Link>
              <Link to={"/productos"}>Productos</Link>
              <Link to={"/contacto"}>Contacto</Link>
              <Link to={"/carrito"}>
                <CartWidget />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavBar;
