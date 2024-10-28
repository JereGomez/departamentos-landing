import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Tabs, Tab, Card } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import ImageCarousel from "../components/imageCarousel";
import CustomDatePicker from "../components/customDatePicker";
import DetailCard from "../components/detailCard";
import departments from "../json/departments.json";

const DepartmentDetailPage = () => {
  const { id } = useParams();
  const [department, setDepartment] = useState(null);

  useEffect(() => {
    const fetchDepartment = async () => {
      // Simulated API call

      const dept = departments.find((d) => d.id === id);
      setDepartment(dept);
    };

    fetchDepartment();
  }, [id]);

  if (!department) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <main
        style={{
          paddingTop: "50px",
          backgroundColor: "rgb(238, 234, 228)",
        }}
      >
        <Container className="py-4">
          {/* <h1 className="mb-4">{}</h1> */}
          <ImageCarousel photos={department.imagenes} />
          <br></br>
          <Container className="">
            <Row className="">
              <Col style={{ width: "100%", paddingBottom: "10px" }}>
                <Card
                  className=""
                  style={{
                    backgroundColor: "rgb(238, 234, 228)",
                    border: "none",
                    color: "rgb(70,70,70)",
                    height: "100%",
                  }}
                >
                  <Row>
                    <Col xs={12} md={6}>
                      <DetailCard
                        department={department}
                        attribute="caracteristicas"
                      />
                    </Col>
                    <Col xs={12} md={6}>
                      <DetailCard
                        department={department}
                        attribute="servicios"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Card
                      className=""
                      style={{
                        backgroundColor: "rgb(238, 234, 228)",
                        border: "none",
                        color: "rgb(70,70,70)",
                        height: "100%",
                      }}
                    >
                      <Card.Body>
                        <Card.Text style={{ color: "rgb(30,30,30)" }}>
                          Encantador departamento en el corazón de Bariloche,
                          rodeado de paisajes de montaña y a pocos minutos del
                          lago Nahuel Huapi. Ideal para disfrutar de la
                          naturaleza con todas las comodidades modernas.
                          ¡Perfecto para unas vacaciones inolvidables en la
                          Patagonia!
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Row>
                </Card>
              </Col>
              <Col xs={16} md={5}>
                <CustomDatePicker
                  style={{ backgroundColor: "rgb(238, 234, 228)" }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default DepartmentDetailPage;
