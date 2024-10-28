import React from "react";
import { Col } from "react-bootstrap";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

const DetailCard = ({ department, attribute }) => {
  console.log(department[attribute]);
  return (
    <div
      className=" card h-100"
      style={{
        backgroundColor: "rgb(231, 231, 218,0.3)",
        border: "none",
        borderRadius: "15px",
      }}
    >
      {/* <Card.Img
        variant="top"
        src={
          "data:image/jpeg;base64,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"
        }
        alt={"cardImage"}
      /> */}
      <Card.Body>
        <Card.Title>
          {attribute == "caracteristicas"
            ? "Distrubucion y  Equipamiento"
            : "Servicios"}
        </Card.Title>
        <Card.Text style={{ color: "" }}></Card.Text>

        <div style={{ paddingLeft: "10%" }}>
          {department[attribute] && Array.isArray(department[attribute])
            ? department[attribute].map((value) => (
                <li style={{ listStyleType: "none" }}>
                  <strong>-</strong> {value}
                </li>
              ))
            : Object.entries(department[attribute]).map(([key, value]) => (
                <li>
                  {key && key}: {value}
                </li>
              ))}
        </div>
      </Card.Body>
    </div>
  );
};

DetailCard.propTypes = {
  department: PropTypes.shape({
    characteristics: PropTypes.object,
    equipment: PropTypes.object,
    others: PropTypes.array,
  }),
};

export default DetailCard;
