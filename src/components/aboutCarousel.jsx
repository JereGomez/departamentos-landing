import React from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutCarousel = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVu5PpYYbpH_yZFqqMERPQ7wTH8cNopXVhKupVPqB2oemrhBqbh6klFgaH_UpE6bght8Y&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVu5PpYYbpH_yZFqqMERPQ7wTH8cNopXVhKupVPqB2oemrhBqbh6klFgaH_UpE6bght8Y&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVu5PpYYbpH_yZFqqMERPQ7wTH8cNopXVhKupVPqB2oemrhBqbh6klFgaH_UpE6bght8Y&usqp=CAU",
  ];

  return (
    <section id="about" className="py-5" style={{ placeItems: "center" }}>
      <Card
        className="card h-100"
        style={{
          backgroundColor: "rgb(238, 234, 228)",
          border: "none",
          width: "90%",
          color: "rgb(70,70,70)",
        }}
      >
        <Container style={{ paddingTop: "1%", paddingBottom: "1%" }}>
          <Row className="align-items-center">
            {/* Carousel section */}
            <Col lg={6} className="mb-4 mb-lg-0">
              <Carousel>
                {images.map((src, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100 rounded"
                      src={src}
                      alt={`Scenic view ${index + 1}`}
                      style={{}}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>

            {/* Text content section */}
            <Col lg={6}>
              <h2
                className="display-5 fw-bold mb-3"
                style={{ fontFamily: "Serif", color: "rgb(30,30,30)" }}
              >
                Nuestros Departamentos
              </h2>
              <p className="lead mb-4" style={{ fontFamily: "sans-serif" }}>
                Descubre el encanto único de nuestros departamentos en
                Bariloche, donde la belleza natural se fusiona con una rica
                cultura y experiencias inolvidables. Desde lagos cristalinos
                hasta montañas imponentes, nuestros paisajes ofrecen algo
                especial para cada viajero.
              </p>
              <ul className="list-unstyled" style={{}}>
                <li className="mb-2">• Impresionantes paisajes naturales</li>
                <li className="mb-2">• Rica herencia cultural</li>
                <li className="mb-2">• Alojamiento de lujo</li>
                <li>• Experiencias locales inolvidables</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Card>
    </section>
  );
};

export default AboutCarousel;
