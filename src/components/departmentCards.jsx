import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const DepartmentCards = ({ id }) => {
  const departments = [
    {
      id: "1",
      name: "Coastal Paradise",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCDugwnk3aFmbxjGQ3syeRBdT-nz9hEJpXZg&s",
      description: "Experience the beauty of our pristine beaches",
      features: [
        "Sandy beaches",
        "Water sports",
        "Seafood restaurants",
        "Luxury resorts",
      ],
    },
    {
      id: "2",
      name: "Mountain Retreat",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCDugwnk3aFmbxjGQ3syeRBdT-nz9hEJpXZg&s",
      description: "Escape to the tranquility of our mountain landscapes",
      features: [
        "Hiking trails",
        "Scenic views",
        "Fresh mountain air",
        "Cozy cabins",
      ],
    },
    {
      id: "3",
      name: "Cultural Hub",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCDugwnk3aFmbxjGQ3syeRBdT-nz9hEJpXZg&s",
      description: "Immerse yourself in the rich history and culture",
      features: [
        "Historic sites",
        "Art galleries",
        "Local cuisine",
        "Festivals",
      ],
    },
  ];

  return (
    <div
      id={id}
      className="py-5"
      style={{ placeItems: "center", paddingTop: "1%", paddingBottom: "1%" }}
    >
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
          Nuestros Departamentos
        </h2>
        <Row>
          {departments.map((dept) => (
            <Col md={6} lg={4} key={dept.id} className="mb-4">
              <Link
                to={`/department/${dept.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  className="h-100 shadow-sm"
                  style={{
                    backgroundColor: "rgb(231, 231, 218,0)",
                    border: "none",
                  }}
                >
                  <Card.Img variant="top" src={dept.image} alt={dept.name} />
                  <Card.Body>
                    <Card.Title style={{ color: "" }}>{dept.name}</Card.Title>
                    <Card.Text style={{ color: "" }}>
                      {dept.description}
                    </Card.Text>
                    <ul className="list-unstyled" style={{ color: "" }}>
                      {dept.features.map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};

DepartmentCards.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DepartmentCards;
