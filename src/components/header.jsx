import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBIcon } from "mdb-react-ui-kit";

const Header = () => {
  console.log("header");
  return (
    <Navbar
      expand="lg"
      className="py-3 fixed-top"
      style={{
        backgroundColor: "rgba(0,0,0,0)",
        backdropFilter: "blur(3px)",
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span>{<MDBIcon fas icon="mountain" />}</span>
          <span
            className="site-title"
            style={{
              color: "black",
              fontWeight: "bold",
              //   textShadow: `
              //   -0.25px -0.25px 0 gray,
              //   0.25px 0.25px 0 gray,
              //   -0.25px -0.25px 0 gray,
              //   0.25px 0.25px 0 gray
              // `,
            }}
          >
            Titulo Departamentos
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/#welcome" style={{ color: "black" }}>
              Inicio
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/#departmentCards"
              style={{ color: "black" }}
            >
              Departamentos
            </Nav.Link>
            <Nav.Link as={Link} to="/#reservation" style={{ color: "black" }}>
              Consultar Reserva
            </Nav.Link>
            <Nav.Link as={Link} to="/#contactFooter" style={{ color: "black" }}>
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
