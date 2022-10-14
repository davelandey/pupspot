import DatePicker from "react-date-picker";
import React, { useState, useEffect } from "react";
import "./PetProfile.css";
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

import "bootstrap/dist/css/bootstrap.min.css";
import CustomListDropDown from "./CustomListDropDown";
// DATE:

const PetProfilePage = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  // DATE:
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Container className="petprofilePage" style={{ width: "95%" }}>
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
                <Col m="4">
                  <FormGroup className="petName">
                    <Label for="Petname">Pet's name:</Label>
                    <Input
                      id="Petname"
                      name="petProfileFirstName"
                      placeholder="Add/Edit pet name"
                      type="string"
                    />
                  </FormGroup>
                  <FormGroup className="radio-sex" check>
                    <Input name="radio2" type="radio" />{" "}
                    <Label check>MALE</Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input name="radio2" type="radio" />{" "}
                    <Label check>FEMALE</Label>
                  </FormGroup>
                </Col>
                <Col m="4">
                  <FormGroup className="FormGroup">
                    <CustomListDropDown />
                    {/* Leaving the below in case we want users to manually enter breed? */}
                    {/* <Input
                      id="petProfileBreed"
                      name="petProfileBreed"
                      placeholder="Add/Edit your pet's breed"
                      type="string"
                    /> */}
                  </FormGroup>

                  <FormGroup className="birthdate">
                    Birth Date:
                    <DatePicker onChange={onChange} value={value} />
                    {/* working */}
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
                      <CardTitle tag="h5">[petName]</CardTitle>
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
              <FormGroup className="petBio">
                <Label for="exampleText">Pet bio:</Label>
                <Input id="exampleText" name="text" type="textarea" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">Pet Profile picture</Label>
                <Input id="exampleFile" name="file" type="file" />
                <FormText>Upload your pet's profile picture here.</FormText>
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

export default PetProfilePage;
