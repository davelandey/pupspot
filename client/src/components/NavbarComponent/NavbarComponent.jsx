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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "./navbar.css";
import Login from "../Auth/Login/Login";
import PetProfile from "../PetProfile/PetProfileIndex";
import { FiSettings } from "react-icons/fi";
<<<<<<< HEAD
import ProfileIndex from "../Profile/ProfileIndex"
=======
>>>>>>> develop
import PetProfileAdd from "../PetProfile/PetProfileAdd";
import PetProfileIndex from "../PetProfile/PetProfileIndex";
import PetProfileNestedModal from "../PetProfile/PetProfileNestedModal";
import ProfileIndex from "../Profile/ProfileIndex";
import ProfileView from "../Profile/ProfileView";
import ProfileEdit from "../Profile/ProfileEdit";


const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [modal, setModal] = useState(false);
  const toggleUserProfile = () => setModal(!modal);

  const [modalPet, setModalPet] = useState(false);
  const toggleUserPetProfile = () => setModalPet(!modalPet);

  const [isShown, setIsShown] = useState(true);

  const handleClick = event => {
    console.log("Pet Profile click is working")
    setIsShown(current => !current);

  };

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
              <DropdownMenu left>
                <DropdownItem>
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to={"/category/dog-parks"}
                  >
                    Dog Parks
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to={"/category/trails"}
                  >
                    Trails & Paths
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to={"/category/restaurants"}
                  >
                    Dog Friendly Restaurants
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <FiSettings /> Settings
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                  <Button color="danger" onClick={toggleUserProfile}>
                    User Profile
                  </Button>
                  <Modal
                    isOpen={modal}
                    toggle={toggleUserProfile}
                    size="xl"
                    style={{
                      width: "80%",
                      height: "90%",
                      overflow: "scroll-y",
                    }}
                  >
                    <ModalHeader toggle={toggleUserProfile}>
                      User Profile
                    </ModalHeader>
                    <ModalBody id="user-profile-modal">
                      {/* ADD PROPS HERE FOR IT TO WORK --------------------------------------------------------- */}
                      <ProfileIndex/>

                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={toggleUserProfile}>
                        Submit
                      </Button>{" "}
                      <Button color="secondary" onClick={toggleUserProfile}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
                </DropdownItem>

                {/* ------------- Pet Profile ---------------- */}

                <DropdownItem>
                  <div>
                    <Button color="danger" onClick={handleClick}> Pet Profile</Button>
                    { isShown && 
                    <PetProfileIndex isShown = {isShown} setIsShown={setIsShown} handleClick={handleClick} />}
                  </div>
                </DropdownItem>
                {/* Privacy */}
                <DropdownItem>
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to={"/privacy-policy"}
                  >
                    Privacy policy
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <NavbarText>
            <Login
              sessionToken={props.sessionToken}
              clearToken={props.clearToken}
              updateToken={props.updateToken}
              setUserId={props.setUserId}
              userId={props.userId}
            />
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
