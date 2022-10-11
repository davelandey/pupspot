import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "./login.css";

const Login = (args) => {
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [keyboard, setKeyboard] = useState(true);
  const toggle = () => setModal(!modal);

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

  return (
    <>
      <Button onClick={toggle}>
        {" "}
        {/* Removed from below: to={"/login"} */}
        <NavLink className="login-button">Login</NavLink>
      </Button>

      <Form>
        <Modal
          isOpen={modal}
          toggle={toggle}
          backdrop={"static"}
          keyboard={false}
          centered={true}
          {...args}
        >
          <ModalHeader className="modal-header" toggle={toggle}>
            <span className="modal-header-text">
              <h3>LOGIN</h3>
            </span>
          </ModalHeader>
          <ModalBody>
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
                id="Password"
                name="password"
                placeholder="Password"
                type="password"
              />
              <div className="btn-container">
                <Button onClick={toggle} className="submitButton">
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
