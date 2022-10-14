import React, { useState, useEffect } from "react";
import "./Profile.css";
import { NavLink } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Input,
  Label,
  Form,
  FormText,
  FormGroup,
  Button,
  // Toggle,
  // Modal,
  // ModalHeader,
  // ModalBody,
  // ModalFooter,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

const ProfileView = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  function onEmailClick() {
    window.open(`mailto:${props.user?.email}`);
  }

  //! ROB TOKEN AND getting props of user profile data
  // let profileData = props.profileData;
  // let token = props.sessionToken;
  // console.log(token);

  //!create a fetch functure that fetches based of pet owner id
  //store that in another usestate called pets

  useEffect(() => {
    //! call FetchPets
  }, [props.user]);

  return (
    <>
      {/* <Button color="danger" onClick={toggle}>
    <NavLink className="login-button" >User Profile</NavLink>
      </Button> */}
      <Container className="profileView" style={{ width: "95%" }}>
        {/* One row, across page */}
        <Row>
          {/* Column one - will adjust to size, automatically*/}
          <Col
            className="bg-light border"
            xxl="4"
            style={{ overflow: "scroll-y", height: "50%" }}
          >
            <Form>
              <Row>
                <Col m="2">
                  <FormGroup className="FormGroup">
                    {/* <Label for="exampleEmail">First name:</Label>
                    <Input
                      id="userProfileFirstName"
                      name="userProfileFirstName"
                      placeholder="Add/Edit your first name"
                      type="string"
                    /> */}
                    {/* -------------------WORKING ON PROPS */}
                    {/* <h4>{profileData}</h4>
                    <p>Name: {profileData.name}</p> */}
                  </FormGroup>
                  <FormGroup className="FormGroup">
                    <Label for="exampleEmail">
                      Name:{props.user?.firstName}
                    </Label>
                    {/* <Input
                      id="userProfileLastName"
                      name="userProfileLastName"
                      placeholder="Add/Edit your last name"
                      type="string"
                    /> */}
                  </FormGroup>
                  <FormGroup className="FormGroup">
                    <Label for="exampleEmail">
                      Username:{props.user?.userName}
                    </Label>
                    {/* <Input
                      id="userProfileUserName"
                      name="userProfileUserName"
                      placeholder="Add/Edit your user name"
                      type="string"
                    /> */}
                  </FormGroup>
                  <FormGroup>
                    {/* <Label for="userProfilePassword">Password</Label> */}
                    {/* <Input
                      id="userProfilePassword"
                      name="userProfilePassword"
                      placeholder="Edit your password"
                      type="password"
                    /> */}
                  </FormGroup>
                  <FormGroup className="FormGroup">
                    <Label for="exampleEmail">
                      About:{props.user?.humanBio}
                    </Label>
                    {/* <Input
                      id="userProfileUserName"
                      name="userProfileUserName"
                      placeholder="Add/Edit your user name"
                      type="string"
                    /> */}
                  </FormGroup>
                </Col>
                <Col xs="4">
                  {/* ------------------------------PROFILE PICTURE */}
                  <Card
                    style={{
                      width: "18rem",
                    }}
                  >
                    <img alt="Sample" src="https://picsum.photos/300/200" />
                    <CardBody>
                      {/* <CardTitle tag="h5">[userName]</CardTitle> */}
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {/* Card subtitle */}
                      </CardSubtitle>
                      <CardText>
                        PROFILE PICTURE{props.user?.profilePic}
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>

              {/* ----------------------------------------MESSAGE BUTTON */}
              <FormGroup>
                <Button onClick={onEmailClick}>Message me!</Button>
              </FormGroup>
            </Form>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <img alt="Sample" src="https://picsum.photos/300/200" />

              <CardBody>
                <CardTitle tag="h5">[userName]</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>PET PROFILE PICTURE</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfileView;
