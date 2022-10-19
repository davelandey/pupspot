
import DatePicker from "react-date-picker";

import React, { useState, useEffect } from "react";

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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import CustomListDropDown from "./CustomListDropDown";
// DATE:

const PetProfileAdd = (props) => {
  const updateOn = props.updateOn
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  // DATE:
  const [value, onChange] = useState(new Date());

  return (
    <>
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add your pet!</ModalHeader>
        <ModalBody>
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
                  <div>
                  <img alt="Sample" src="https://picsum.photos/300/200" />
                  </div>
                </Col>
              </Row>
              <FormGroup className="petBio">
                <Label for="exampleText">Pet bio:</Label>
                <Input id="exampleText" name="text" type="textarea" bsSize="large"/>
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">Pet Profile picture</Label>
                <Input id="exampleFile" name="file" type="file" />
                <FormText>Upload your pet's profile picture here.</FormText>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Update!
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default PetProfileAdd;
