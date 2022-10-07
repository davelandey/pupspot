import "./Profile.css"
import { NavLink } from "react-router-dom";
import {Container, Row, Col, Input, Label, Form, FormText, FormGroup, Button} from "reactstrap"



const Profile = (props) => {

    return ( 
      <>
    <Container className="profilePage">
      {/* One row, across page */}
      <Row >
        {/* Column one */}
    <Col
      className="bg-light border"
      xs="2"
    >
      {/* Rows within column one */}
        <Row>
           <Col className="bg-light border">
           Personal information
           </Col>
        </Row>
        <Row>
            <Col className="bg-light border">
            Privacy settings
            </Col>
        </Row>
        <Row>
            Pet Profile
        </Row>
        <Row>
            Row 4
        </Row>
        <Row>
            Row 5
        </Row>
    </Col>
    {/* Column two - will adjust to size, automatically*/}
    <Col
      className="bg-light border"
      xxl ="4"
      style={{overflow: "scroll", height: "500px" }}
    >
      <Form>
  <FormGroup className="FormGroup">
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleSelect">
      Select
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
        1
      </option>
      <option>
        2
      </option>
      <option>
        3
      </option>
      <option>
        4
      </option>
      <option>
        5
      </option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="exampleSelectMulti">
      Select Multiple
    </Label>
    <Input
      id="exampleSelectMulti"
      multiple
      name="selectMulti"
      type="select"
    >
      <option>
        1
      </option>
      <option>
        2
      </option>
      <option>
        3
      </option>
      <option>
        4
      </option>
      <option>
        5
      </option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="exampleText">
      Text Area
    </Label>
    <Input
      id="exampleText"
      name="text"
      type="textarea"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleFile">
      File
    </Label>
    <Input
      id="exampleFile"
      name="file"
      type="file"
    />
    <FormText>
      This is some placeholder block-level help text for the above input. It‘s a bit lighter and easily wraps to a new line.
    </FormText>
  </FormGroup>
  <FormGroup tag="fieldset">
    <legend>
      Radio Buttons
    </legend>
    <FormGroup check>
      <Input
        name="radio1"
        type="radio"
      />
      {' '}
      <Label check>
        Option one is this and that—be sure to include why it‘s great
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input
        name="radio1"
        type="radio"
      />
      {' '}
      <Label check>
        Option two can be something else and selecting it will deselect option one
      </Label>
    </FormGroup>
    <FormGroup
      check
      disabled
    >
      <Input
        disabled
        name="radio1"
        type="radio"
      />
      {' '}
      <Label check>
        Option three is disabled
      </Label>
    </FormGroup>
  </FormGroup>
  <FormGroup check>
    <Input type="checkbox" />
    {' '}
    <Label check>
      Check me out
    </Label>
  </FormGroup>
  <Button>
    Submit
  </Button>
</Form>
     
    </Col>
    {/* Column three */}
    <Col
      className="bg-light border"
      xs="3"
    >
      .col-3
    </Col>
  </Row>
  </Container>
    </> 
    );
}
 
export default Profile;