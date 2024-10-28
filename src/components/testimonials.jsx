import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      rating: 5,
      comment:
        "¡Una experiencia inolvidable! Las playas estaban impecables y la cultura local fue fascinante.",
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment:
        "Me encantó el refugio en la montaña. Las vistas eran impresionantes y el alojamiento muy acogedor.",
    },
    {
      name: "Mike Johnson",
      rating: 5,
      comment:
        "Los tours culturales fueron increíbles. Aprendí mucho sobre la historia y las tradiciones locales.",
    },
  ];

  return (
    <div className="py-5" style={{ placeItems: "center" }}>
      <Card
        style={{
          backgroundColor: "rgb(238, 234, 228)",
          paddingLeft: "1%",
          paddingRight: "1%",
          border: "none",
          width: "90%",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{ paddingTop: "1%", color: "(rgb:30, 30, 30)" }}
        >
          Lo que Dicen Nuestros Huéspedes
        </h2>
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card
                className="h-100 shadow-sm"
                style={{
                  backgroundColor: "rgb(238, 234, 228)",
                  border: "none",
                  color: "rgb(70,70,70)",
                }}
              >
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Card.Title style={{ color: "rgb(30,30,30)" }}>
                      {testimonial.name}
                    </Card.Title>
                    <div className="d-flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-warning" />
                      ))}
                    </div>
                  </div>
                  <Card.Text style={{ color: "rgb(70,70,70)" }}>
                    {testimonial.comment}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};

export default Testimonials;
