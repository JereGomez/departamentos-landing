import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import departments from "../json/departments.json";

const DepartmentCards = ({ id }) => {
  // const departments = [
  //   {
  //     id: "1",
  //     name: "Paraíso en la Costa",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCDugwnk3aFmbxjGQ3syeRBdT-nz9hEJpXZg&s",
  //     description: "Disfruta de la belleza de nuestras playas tranquilas",
  //     features: [
  //       "Playas de arena",
  //       "Deportes acuáticos",
  //       "Restaurantes de mariscos",
  //       "Departamentos con vista al mar",
  //     ],
  //   },
  //   {
  //     id: "2",
  //     name: "Refugio en la Montaña",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCDugwnk3aFmbxjGQ3syeRBdT-nz9hEJpXZg&s",
  //     description: "Escápate a un entorno natural rodeado de montañas",
  //     features: [
  //       "Vistas panorámicas",
  //       "Senderos para caminatas",
  //       "Cerca de centros de ski",
  //       "Departamentos acogedores",
  //     ],
  //   },
  //   {
  //     id: "3",
  //     name: "Descanso en el Bosque",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCDugwnk3aFmbxjGQ3syeRBdT-nz9hEJpXZg&s",
  //     description: "Conéctate con la naturaleza en un entorno forestal",
  //     features: [
  //       "Cerca de lagos y ríos",
  //       "Áreas de picnic",
  //       "Departamentos rústicos",
  //       "Acceso a actividades al aire libre",
  //     ],
  //   },
  // ];

  return (
    <div
      id={id}
      className="py-5"
      style={{ placeItems: "center", paddingTop: "1%", paddingBottom: "1%" }}
    >
      <Card
        style={{
          backgroundColor: "rgb(238, 234, 228)",
          paddingLeft: "1%",
          paddingRight: "1%",
          border: "none",
          width: "90%",
          color: "rgb(70,70,70)",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{ paddingTop: "1%", color: "rgb(30,30,30)" }}
        >
          Elige uno
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
                    backgroundColor: "rgb(238, 234, 228)",
                    border: "none",
                    color: "rgb(70,70,70)",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={dept.imagenes[0]}
                    alt={dept.name}
                  />
                  <Card.Body>
                    <Card.Title style={{ color: "rgb(30,30,30)" }}>
                      {dept.nombre}
                    </Card.Title>
                    <Card.Text style={{ color: "" }}>
                      {dept.descripcion}
                    </Card.Text>
                    <ul className="list-unstyled" style={{ color: "" }}>
                      {dept.caracteristicas.map((feature, index) => (
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
