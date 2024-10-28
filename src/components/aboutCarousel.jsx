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
          backgroundColor: "rgb(231, 231, 218,0.3)",
          border: "none",
          width: "90%",
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
                style={{ fontFamily: "Serif" }}
              >
                About Our Departments
              </h2>
              <p className="lead mb-4" style={{ fontFamily: "sans-serif" }}>
                Discover the unique charm of our departments, each offering a
                blend of natural beauty, rich culture, and unforgettable
                experiences. From pristine beaches to lush mountains, our
                diverse landscapes promise something for every traveler.
              </p>
              <ul className="list-unstyled" style={{}}>
                <li className="mb-2">• Stunning natural landscapes</li>
                <li className="mb-2">• Rich cultural heritage</li>
                <li className="mb-2">• Luxurious accommodations</li>
                <li>• Unforgettable local experiences</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Card>
    </section>
  );
};

export default AboutCarousel;
