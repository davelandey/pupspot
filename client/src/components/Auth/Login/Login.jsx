import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
  FormGroup,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "./login.css";
import { RouteFetch } from "../../Routes";
import { Endpoints } from "../../Routes/Endpoints";

const Login = (props) => {
  // Modal Stuff
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [keyboard, setKeyboard] = useState(true);
  //Original code below
  // const toggle = () => setModal(!modal)

console.log(props.sessionToken)

  const toggle = () => {
    if (props.sessionToken) {
      console.log("clear token");
      props.clearToken();
    } else {
      //this doesn't seem to be doing anything...
      console.log("close modal");
      setModal(!modal);
    }
  };

  // if props.token then clear token
  //else set modal

  const changeBackdrop = (e) => {
    let { value } = e.target;
    if (value !== "static") {
      value = JSON.parse(value);
    }
    setBackdrop(value);
  };

  const changeKeyboard = (e) => {
    setKeyboard(e.currentTarget.checked);
  };

  //*-----LOGIN POSTING DATA------
  const [userName, setUserName] = useState("testUser1");
  const [password, setPassword] = useState("123");

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("post login");

    let body = {
      user: {
        userName: userName,
        password: password,
      },
    };

    try {
      await RouteFetch.post(
        Endpoints.user.login,
        body,
        (data) => props.updateToken(data.token)
        // close the modal
      );
      setModal(!modal);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Button onClick={toggle}>
        {" "}
        {/* Removed from below: to={"/login"} */}
        <NavLink className="login-button">
        {!props.sessionToken ? "LOGIN" : "LOGOUT"}
        
        </NavLink>
      </Button>

      <Form onSubmit={handleSubmit}>
        <Modal
          isOpen={modal}
          toggle={toggle}
          backdrop={"static"}
          keyboard={false}
          centered={true}
        >
          <ModalHeader className="modal-header" toggle={toggle}>
            <span className="modal-header-text">
LOGIN
            </span>
          </ModalHeader>
          <ModalBody>
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
                  setPassword(event.target.value);
                }}
                id="Password"
                name="password"
                placeholder="Password"
                type="password"
              />
              <div className="btn-container">
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  className="submitButton"
                >
                  Submit
                </Button>
              </div>
            </FormGroup>
          </ModalBody>
          <ModalFooter className="no-account-section">
            Don't have an account?
            <NavLink
              onClick={toggle}
              activeClassName="active"
              className="nav-link"
              id="signup-nav-link"
              to={"/signup"}
            >
              Create one
            </NavLink>
          </ModalFooter>
        </Modal>
      </Form>
    </>
  );
};

export default Login;
