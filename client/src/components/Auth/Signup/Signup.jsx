import React from "react";
import { Col, Row, Container } from "reactstrap";
import "./Signup.css";
// import { NavLink } from "react-router-dom";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";
import { useState } from "react";
import { RouteFetch } from "../../Routes";
import { Endpoints } from "../../Routes/Endpoints";

const Signup = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // Signup Fetch
  async function handleSubmit(event){
    event.preventDefault();
    console.log("post signup");

    let body = {
      user: {
        userName: userName,
        email: email,
        password: password,
      },
    };

    try {
      await RouteFetch.post(Endpoints.user.signup, body, (data) =>
         props.updateToken(data.token)
    
      );
     } catch (error) {
       console.error(error);
     }





  }


  return (
    <div className="signup">
      <Container>
        <Row>
          <Col className="left"></Col>
          <Col className="signUpFormCol">
            {" "}
            <Form onSubmit={handleSubmit}>
<div className="signup-header">

              <h3>SIGN UP</h3>
</div>

              <FormGroup>
                <Input
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
                  id="Username"
                  name="Username"
                  placeholder="Username"
                  type="Username"
                />
              </FormGroup>
              <FormGroup>
          
                <Input
                   onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  id="Email"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
           
                <Input
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  id="Password"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
              </FormGroup>
              <Button onClick={handleSubmit}type="submit" className="submitButton">Submit</Button>
            </Form>
          </Col>

          <Col className="right"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
