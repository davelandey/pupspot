import React from "react";
import { Col, Row, Container } from "reactstrap";
import "./Signup.css";
// import { NavLink } from "react-router-dom";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";

const Signup = (props) => {
  return (
    <div className="signup">
      <Container>
        <Row>
          <Col className="left"></Col>
          <Col className="signUpFormCol">
            {" "}
            <Form>
              <FormGroup>
                <Label for="Username">
                  <h3>Username</h3>
                </Label>
                <Input
                  id="Username"
                  name="Username"
                  placeholder="Username"
                  type="Username"
                />
              </FormGroup>
              <FormGroup>
                <Label for="Email">
                  <h3>Email</h3>
                </Label>
                <Input
                  id="Email"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="Password">
                  <h3>Password</h3>
                </Label>
                <Input
                  id="Password"
                  name="password"
                  placeholder="password"
                  type="password"
                />
              </FormGroup>
              <Button className="submitButton">Submit</Button>
            </Form>
          </Col>

          <Col className="right"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
