import "./PetProfile.css";
import { Container, Row, Col } from "reactstrap";
import React, { useState } from "react";
import { profileMenuData } from "./petprofileMenuData.js";

// import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
// import * as AiIcons from "react-icons/ai";

import { IconContext } from "react-icons";

// ROUTING

import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [sidebar, setSidebar] = useState(false);

//   const showSidebar = () => setSidebar(!sidebar);

const PetProfile = (props) => {
  return (
    <>
      <Container className="petProfilePage">
        <Row>
          <Col className="bg-light border" xs="3">
            <IconContext.Provider value={{ color: "#FFF" }}>
              {/* SET ICON COLOR HERE */}
              <div className="profilePageMenu">
                {/* <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link> */}
              </div>
              {/* <nav className={sidebar ? "nav-menu active" : "nav-menu"}> */}
              <nav>
                {/* <ul className="nav-menu-items" onClick={showSidebar}> */}
                <ul className="nav-menu-items">
                  <li className="navbar-toggle">
                    {/* <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link> */}
                  </li>
                  {profileMenuData.map((item, index) => {
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>;
                  })}
                </ul>
              </nav>
            </IconContext.Provider>
          </Col>
          <Col className="bg-light border" xs="auto">
            .col-auto - variable width content
          </Col>
          <Col className="bg-light border" xs="3">
            .col-3
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PetProfile;
