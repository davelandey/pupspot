import React from "react";
import { Col, Row, Container } from "reactstrap";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
  let activeStyle = { textDecoration: "none", color: "white" };

  //!WHAT COLOR?
  let inActiveStyle = { textDecoration: "none", color: "white" };
  //Current year for copywrite:
  const currentYear = new Date().getFullYear();
  const yearTxt = currentYear === 2022 ? "2022" : "2022 - " + currentYear;

  return (
    <div className="footer">
      <Container>
        <Row>
          <Col className="copyright"> PupSpot © {yearTxt}</Col>
          <Col className="mid"></Col>

          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
