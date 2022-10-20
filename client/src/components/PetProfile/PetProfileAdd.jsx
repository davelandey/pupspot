
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
  const [petName, setPetName] = useState("");
  const [sex, setSex] = useState("");
  // CREATE A FUNCTION FOR HANDLE SUBMIT
  // At the end of the fetch after a success you will need to refresh the petModal of dogs

  return (
    <>

      <Container className="petprofilePage">
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
                      value = {petName}
                      onChange={((e)=> setPetName(e.target.value))}
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
                  <FormGroup className="breed">
                    <CustomListDropDown />
                 
                  </FormGroup>

                  <FormGroup className="birthdate">
                    Birth Date:
                    <DatePicker onChange={onChange} value={value} />
                    {/* working */}
                  </FormGroup>
                </Col>

                <Col xs="4">
                  <div>
                  <img alt="Sample" src="https://rremiumb.sirv.com/doggo%20profile.jpg?w=293" />
                  </div>
                  <FormGroup>
                <Label for="exampleFile">Pet Profile picture</Label>
                <Input id="exampleFile" name="file" type="file" />
                <FormText>Upload your pet's profile picture here.</FormText>
              </FormGroup>
                </Col>
              </Row>
              <FormGroup className="petBio">
                <Label for="exampleText">Pet bio:</Label>
                <Input id="exampleText" name="text" type="textarea" bsSize="large"/>
              </FormGroup>
        
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PetProfileAdd;
