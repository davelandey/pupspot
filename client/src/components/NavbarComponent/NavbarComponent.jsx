import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";
import "./navbar.css";

const NavbarComponent = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <span className="navbrand">Pupspot</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* <NavItem>
              <NavLink href="/components/">Login</NavLink>
            </NavItem> */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Locations
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to={"/dog-parks"}
                  >
                    Dog Parks
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to={"/trails"}
                  >
                    Trails & Paths
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to={"/restaurants"}
                  >
                    Dog Friendly Restaurants
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to={"/profile"}
              >
                Profile
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <Button>
              {" "}
              <NavLink className="login-button" to={"/login"}>
                Login
              </NavLink>
            </Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
