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
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

const ProfileView = (props) => {
  const user = props.user;

  // -----------------_EMAIL ME
  function onEmailClick() {
    window.open(`mailto:${props.user?.email}`);
  }

  // useEffect(() => {}, [props.user]);

  return (
    <>
      {/* <Container className="profileView" style={{ width: "95%" }}> */}
        <Row>
          <Col
            className="bg-light border"
            xxl="4"
            style={{ overflow: "scroll-y", height: "50%" }}
          >
            <h2>USER PROFILE VIEW</h2>
            <Form>
              <Row>
                <Col m="2">
                  <FormGroup className="FormGroup">
                    <Label for="exampleEmail">
                      Name:{props.user?.firstName}
                    </Label>
                  </FormGroup>
                  <FormGroup className="FormGroup">
                    <Label for="exampleEmail">
                      Username:{props.user?.userName}
                    </Label>
                  </FormGroup>

                  <FormGroup className="FormGroup">
                    <Label for="exampleEmail">
                      About:{props.user?.humanBio}
                    </Label>
                  </FormGroup>
                </Col>
                <Col xs="4">
                  {/* ------------------------------PROFILE PICTURE */}
                  <Card
                    style={{
                      width: "18rem",
                    }}
                  >
                    <img
                      alt="Sample"
                      src={props.user?.profilePic}
                      onError={(ev) => {
                        debugger;
                        ev.target.src =
                          "https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg";
                      }}
                    />

                    <CardBody>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        Card subtitle
                      </CardSubtitle>

                      <CardText>PROFILE PICTURE</CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>

              {/* ---MESSAGE BUTTON */}
              <FormGroup>
                <Button onClick={onEmailClick}>Message me!</Button>
              </FormGroup>
            </Form>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <img alt="Sample" src="https://rremiumb.sirv.com/DSC_0089.JPG" />

              <CardBody>
                <CardTitle tag="h5">Wody</CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                ></CardSubtitle>
                <p>The Goodest Boi!</p>
                <CardText>PET PROFILE PICTURE</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      {/* </Container> */}
    </>
  );
};

export default ProfileView;
