import React from "react";
import "./Header.css";
import { NavLink, Container, Row, Col } from "reactstrap";
const fireHydrant = require("../../images/Hydrant-3.png");
const petuniaLogo = require("../../images/pupspotLogo_100px.png")

const Header = (props) => {
  return (
    <>
      <Container className="header-bar" fluid>
        <Row className="row1">
          <Col className ="headerCol1" xs="auto">
          <img className="petunia" src={petuniaLogo} alt="pupSpot logo"/>
          </Col>
          <Col xs="auto">
            <h1 className="pupSpot-text">PupSpot.</h1>
            <h2 className="headerTagLine">Find your best friend, a best friend.</h2>
          </Col>
          </Row>
            </Container>
    </>
  );
};

export default Header;
