import React from "react";
import "./Header.css";
import { NavLink, Container, Row, Col } from "reactstrap";
const fireHydrant = require("../../images/Hydrant-3.png");

const Header = (props) => {
  return (
    <>
      <Container className="header-bar" fluid>
        <Row>
          <Col className ="headerCol1" xs="2">
          <NavLink to='/'> <img className="hydrant" src={fireHydrant} alt="A cartoon fire hydrant"/></NavLink>
          </Col>
          <Col xs="auto">
            <h1 className="pupSpot-text">PupSpot.</h1>
            <h2 className="headerTagLine">The most unbelivebly catchy tagline, known to humankind</h2>
          </Col>
          </Row>
            </Container>
    </>
  );
};

export default Header;
