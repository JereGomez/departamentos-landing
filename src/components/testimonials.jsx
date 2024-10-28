import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      rating: 5,
      comment:
        "An unforgettable experience! The beaches were pristine and the local culture was fascinating.",
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment:
        "Loved the mountain retreat. The views were breathtaking and the accommodations were cozy.",
    },
    {
      name: "Mike Johnson",
      rating: 5,
      comment:
        "The cultural tours were amazing. I learned so much about the local history and traditions.",
    },
  ];

  return (
    <div className="py-5" style={{ placeItems: "center" }}>
      <Card
        style={{
          backgroundColor: "rgb(231, 231, 218,0.3)",
          paddingLeft: "1%",
          paddingRight: "1%",
          border: "none",
          width: "90%",
        }}
      >
        <h2 className="text-center mb-4" style={{ paddingTop: "1%" }}>
          What Our Guests Say
        </h2>
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card
                className="h-100 shadow-sm"
                style={{
                  backgroundColor: "rgb(231, 231, 218,0.3)",
                  border: "none",
                }}
              >
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Card.Title style={{ color: "" }}>
                      {testimonial.name}
                    </Card.Title>
                    <div className="d-flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-warning" />
                      ))}
                    </div>
                  </div>
                  <Card.Text style={{ color: "" }}>
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
