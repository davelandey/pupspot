import React, { useState } from "react";
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
  CardText
} from "reactstrap";

const Profile = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      {/* <Button color="danger" onClick={toggle}>
    <NavLink className="login-button" >User Profile</NavLink>
      </Button> */}
      <Container className="profilePage" style={{ width: "95%" }}>
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
                    <Label for="exampleEmail">First name:</Label>
                    <Input
                      id="userProfileFirstName"
                      name="userProfileFirstName"
                      placeholder="Add/Edit your first name"
                      type="string"
                    />
                  </FormGroup>
                  <FormGroup className="FormGroup">
                    <Label for="exampleEmail">Last name:</Label>
                    <Input
                      id="userProfileLastName"
                      name="userProfileLastName"
                      placeholder="Add/Edit your last name"
                      type="string"
                    />
                  </FormGroup>
                  <FormGroup className="FormGroup">
                    <Label for="exampleEmail">User name:</Label>
                    <Input
                      id="userProfileUserName"
                      name="userProfileUserName"
                      placeholder="Add/Edit your user name"
                      type="string"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="userProfilePassword">Password</Label>
                    <Input
                      id="userProfilePassword"
                      name="userProfilePassword"
                      placeholder="Edit your password"
                      type="password"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="userProfileZipcode">Zipcode:</Label>
                    <Input
                      id="userProfileZipcode"
                      name="userProfileZipcode"
                      placeholder="Add/Edit your zipcode"
                      type="string"
                    />
                  </FormGroup>
                </Col>
                <Col xs="4">
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
                      <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card‘s content.
                      </CardText>
                      <Button>Message me!</Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <FormGroup>
                <Label for="exampleText">About me:</Label>
                <Input id="exampleText" name="text" type="textarea" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">Profile picture</Label>
                <Input id="exampleFile" name="file" type="file" />
                <FormText>Upload your profile picture here.</FormText>
              </FormGroup>
              <FormGroup tag="fieldset">
                <legend>Privacy Settings</legend>
                <FormGroup check>
                  <Input name="radio1" type="radio" />{" "}
                  <Label check>
                    Public to all (default): any user of the site can see your
                    profile. You will not be able to leave comments on this
                    setting.
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="radio1" type="radio" />{" "}
                  <Label check>
                    Public to users: only users who are logged in will be able
                    to view your profile and comments.
                  </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Input name="radio1" type="radio" />{" "}
                  <Label check>
                    Private: there are details about this that need to be added{" "}
                  </Label>
                </FormGroup>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
