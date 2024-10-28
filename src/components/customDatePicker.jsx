import React, { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [message, setMessage] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, adults, children, message, startDate, endDate });
  };

  return (
    <div
      style={{
        backgroundColor: "rgb(238, 234, 228)",
        border: "none",
        borderRadius: "15px",
      }}
    >
      <Card
        className="shadow-sm "
        style={{
          backgroundColor: "rgb(238, 234, 228)",
          border: "none",
          color: "rgb(70,70,70)",
          height: "100%",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{ color: "rgb(30,30,30)", paddingTop: "1%" }}
        >
          Consulta disponibilidad para tu reserva
        </h2>
        <Form onSubmit={handleSubmit} style={{ padding: "5%" }}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={{
                    backgroundColor: "rgb(255, 255, 255,0.9)",
                    color: "rgb(70,70,70)",
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    backgroundColor: "rgb(255, 255, 255,0.9)",
                    color: "rgb(70,70,70)",
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formAdults">
                <Form.Label>Cantidad de adultos</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                  required
                  style={{
                    backgroundColor: "rgb(255, 255, 255,0.9)",
                    color: "rgb(70,70,70)",
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formChildren">
                <Form.Label>Cantidad de niños</Form.Label>
                <Form.Control
                  type="number"
                  min="0"
                  value={children}
                  onChange={(e) => setChildren(e.target.value)}
                  style={{
                    backgroundColor: "rgb(255, 255, 255,0.9)",
                    color: "rgb(70,70,70)",
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Group controlId="formMessage" style={{ paddingBottom: "" }}>
                <Form.Label>Consulta/Detalles</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Cantidad de camas, departamento específico que te haya llamado la atención, cualquier duda o especificación que quieras que te respondamos/tengamos en cuenta."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    backgroundColor: "rgb(255, 255, 255,0.9)",
                    color: "rgb(70,70,70)",
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formStartDate">
                <Form.Label style={{ padding: "1%" }}>From Date</Form.Label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="form-control"
                  dateFormat="MMMM d, yyyy"
                  required
                  style={{
                    backgroundColor: "rgb(255, 255, 255,0.9)",
                    color: "rgb(70,70,70)",
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formEndDate">
                <Form.Label style={{ padding: "1%" }}>To Date</Form.Label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  className="form-control"
                  dateFormat="MMMM d, yyyy"
                  required
                  style={{
                    backgroundColor: "rgb(255, 255, 255,0.9)",
                    color: "rgb(70,70,70)",
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button
            variant="primary"
            type="submit"
            className="mt-3"
            style={{
              backgroundColor: "rgb(255, 165, 0)",
              borderColor: "rgb(255, 165, 0)",
              paddingTop: "5px",
            }}
          >
            Enviar
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default BookingForm;
