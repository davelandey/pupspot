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
<div className="signup-header">

              <h3>SIGN UP</h3>
</div>

              <FormGroup>
                <Input
                  id="Username"
                  name="Username"
                  placeholder="Username"
                  type="Username"
                />
              </FormGroup>
              <FormGroup>
          
                <Input
                  id="Email"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
           
                <Input
                  id="Password"
                  name="password"
                  placeholder="Password"
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
