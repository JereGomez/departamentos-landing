import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const WelcomeHero = () => {
  console.log("Welcome Hero");
  return (
    <section id="welcome" className="position-relative">
      <div
        className="bg-image"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVu5PpYYbpH_yZFqqMERPQ7wTH8cNopXVhKupVPqB2oemrhBqbh6klFgaH_UpE6bght8Y&usqp=CAU')",
          height: "70vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
      <Container className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
        <Row className="w-100">
          <Col md={6} className="text-white p-4">
            <h1 className="display-4 fw-bold mb-4">Welcome to Paradise</h1>
            <p className="lead">Discover the beauty of our departments</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WelcomeHero;