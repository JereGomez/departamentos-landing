import { Container, Row, Col, Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import CustomDatePicker from "./customDatePicker"; // Import the BookingForm component
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Map from "./map";

const ReservationPage = ({ id }) => {
  return (
    <section id={id} style={{ paddingTop: "90px", placeItems: "center" }}>
      <Card
        style={{
          backgroundColor: "rgb(231, 231, 218,0.3)",
          paddingLeft: "1%",
          paddingRight: "1%",
          paddingTop: "1%",
          paddingBottom: "1%",
          border: "none",
          width: "90%",
        }}
      >
        <Row className="justify-content-center">
          <Col lg={6} order={{ xs: 2 }}>
            <Map />
          </Col>
          <Col Col order={{ xs: 1 }}>
            <CustomDatePicker />
          </Col>
        </Row>
        <Row className="mt-4"></Row>
      </Card>
    </section>
  );
};
ReservationPage.propTypes = {
  id: PropTypes.string,
};

export default ReservationPage;
