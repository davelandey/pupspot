import React from "react";
// import Signup from "./Signup.jsx";
import { Col, Row, Container } from "reactstrap";
import "./Footer.css";

const Footer = (props) => {
  //Current year for copywrite:
  const currentYear = new Date().getFullYear();
  const yearTxt = currentYear === 2022 ? "2022" : "2022 - " + currentYear;

  return (
    <div className="footer">
      <Container>
        <Row>
          <Col className="copyright"> PupSpot © {yearTxt}</Col>
          <Col className="mid"></Col>

          <Col className="signUpLink">
            {" "}
            <a style={{ textDecoration: "none", color: "white" }} href="Signup">
              <span style={{ fontWeight: "bold" }}>SIGNUP</span>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
