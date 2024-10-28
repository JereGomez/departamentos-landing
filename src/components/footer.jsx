import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Instagram } from "react-bootstrap-icons";
import Input from "./input";
import Textarea from "./textArea";
import FooterBottom from "./footerBottom";

const Footer = ({ id }) => {
  return (
    <footer
      id={id}
      className="footer py-5  text-light"
      style={{ paddingTop: "90px", backgroundColor: "rgb(180,180,180)" }}
    >
      <Container>
        <Row className="footer-container" style={{ color: "rgb(30,30,30)" }}>
          <Col xs={12} md={6} className="mb-4">
            <h3 className="footer-title">Contacto</h3>
            <p className="footer-text">
              123 calle calle, San Carlos de Bariloche, Rio Negro - 8400
            </p>
            <p className="footer-text">Telefono: +54 0000000000</p>
            <p className="footer-text">Email: info@gmail.com</p>
            <div className="social-links d-flex">
              {/* <a
                  href="#"
                  aria-label="Instagram"
                  className="social-link me-3"
                  style={{ color: "black" }}
                >
                  <Instagram />
                </a>
                <a href="#" aria-label="Airbnb" className="social-link me-3">
                  <i class="fa-brands fa-airbnb" style={{ color: "black" }}></i>
                </a>
                <a href="#" aria-label="Booking" className="social-link">
                  Booking Logo
                </a> */}
            </div>
          </Col>
          <Col xs={12} md={6} style={{ color: "rgb(30,30,30)" }}>
            <h3 className="footer-title">Déjanos tu consulta</h3>
            <Form className="footer-form">
              <Form.Group className="mb-3">
                <Input
                  type="text"
                  placeholder="Nombre"
                  className="footer-input form-control"
                  style={{ backgroundColor: "rgb(255, 255, 255,0.9)" }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Input
                  type="email"
                  placeholder="Email"
                  className="footer-input form-control"
                  style={{ backgroundColor: "rgb(255, 255, 255,0.9)" }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Textarea
                  placeholder="Tu consulta"
                  className="footer-textarea form-control"
                  style={{ backgroundColor: "rgb(255, 255, 255,0.9)" }}
                />
              </Form.Group>
              <Button
                type="submit"
                className="footer-submit btn-primary"
                style={{
                  backgroundColor: "rgb(255, 165, 0)",
                  borderColor: "rgb(255, 165, 0)",
                }}
              >
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
        <FooterBottom />
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  id: PropTypes.string,
};

export default Footer;
