import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { sendEmailConsulta } from "../js/emailSender";
import Input from "./input";
import Textarea from "./textArea";
import FooterBottom from "./footerBottom";

const Footer = ({ id }) => {
  // State to hold form data
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    sendEmailConsulta(formData); // Call your function with form data
  };

  return (
    <footer
      id={id}
      className="footer py-5 text-light"
      style={{ paddingTop: "90px", backgroundColor: "rgb(180,180,180)" }}
    >
      <Container>
        <Row className="footer-container" style={{ color: "rgb(30,30,30)" }}>
          <Col xs={12} md={6} className="mb-4">
            <h3 className="footer-title">Contacto</h3>
            <p className="footer-text">
              123 calle calle, San Carlos de Bariloche, Rio Negro - 8400
            </p>
            <p className="footer-text">Teléfono: +54 0000000000</p>
            <p className="footer-text">Email: info@gmail.com</p>
            <div className="social-links d-flex">{/* Social Links Here */}</div>
          </Col>
          <Col xs={12} md={6} style={{ color: "rgb(30,30,30)" }}>
            <h3 className="footer-title">Déjanos tu consulta</h3>
            <Form className="footer-form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Input
                  type="text"
                  name="from_name"
                  placeholder="Nombre"
                  className="footer-input form-control"
                  style={{ backgroundColor: "rgb(255, 255, 255,0.9)" }}
                  value={formData.from_name}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Input
                  type="email"
                  name="from_email"
                  placeholder="Email"
                  className="footer-input form-control"
                  style={{ backgroundColor: "rgb(255, 255, 255,0.9)" }}
                  value={formData.from_email}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Textarea
                  name="message"
                  placeholder="Tu consulta"
                  className="footer-textarea form-control"
                  style={{ backgroundColor: "rgb(255, 255, 255,0.9)" }}
                  value={formData.message}
                  onChange={handleInputChange}
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

export default Footer;
