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
import { RouteFetch } from "../Routes";
import { Endpoints } from "../Routes/Endpoints";

const ProfilePage = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  // PROFILE PIC UPLOAD
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("https://picsum.photos/300/200");

  // USER PHOTO UPLOAD
  const updateUserProfile = async (data) => {
    await RouteFetch.patch(
      Endpoints.user.update + props.user._id,
      data,
      () => props.fetchUser(props.user?._id),
      props.sessionToken
    );
  };

  const UploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "pupspot");
    setLoading(true);
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dimzsxbfc/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const File = await res.json();
      console.log(File.secure_url);

      setImage(File.secure_url);
      setLoading(false);
      updateUserProfile({ user: { profilePic: File.secure_url } });
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {}, [props.user]);

  return (
    <>
      {/* <Button color="danger" onClick={toggle}>
    <NavLink className="login-button" >User Profile</NavLink>
      </Button> */}
      <Container className="profilePage" style={{ width: "95%" }}>
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
                <Col m="2">
                  <FormGroup className="FormGroup">
                    <Label for="exampleEmail">First name:</Label>
                    <Input
                      id="userProfileFirstName"
                      name="userProfileFirstName"
                      placeholder="Add/Edit your first name"
                      type="string"
                    />
                  </FormGroup>
                  <FormGroup className="FormGroup">
                    <Label for="exampleEmail">Last name:</Label>
                    <Input
                      id="userProfileLastName"
                      name="userProfileLastName"
                      placeholder="Add/Edit your last name"
                      type="string"
                    />
                  </FormGroup>
                  <FormGroup className="FormGroup">
                    <Label for="exampleEmail">User name:</Label>
                    <Input
                      id="userProfileUserName"
                      name="userProfileUserName"
                      placeholder="Add/Edit your user name"
                      type="string"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="userProfilePassword">Password</Label>
                    <Input
                      id="userProfilePassword"
                      name="userProfilePassword"
                      placeholder="Edit your password"
                      type="password"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="userProfileZipcode">Zipcode:</Label>
                    <Input
                      id="userProfileZipcode"
                      name="userProfileZipcode"
                      placeholder="Add/Edit your zipcode"
                      type="string"
                    />
                  </FormGroup>
                </Col>
                <Col xs="4">
                  <Card
                    style={{
                      width: "18rem",
                    }}
                  >
                    <img alt="Sample" src={props.user?.profilePic} />
                    {/* <CardBody>
                      <CardTitle tag="h5">[userName]</CardTitle>

                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        Card subtitle
                      </CardSubtitle> */}
                    {/* <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card‘s content.
                      </CardText> */}
                    {/* <Button>Message me!</Button> */}
                    {/* </CardBody> */}
                    <FormGroup>
                      {/* <Label for="exampleFile">Profile picture</Label> */}
                      <Input
                        type="file"
                        name="file"
                        placeholder="Upload image here"
                        onChange={UploadImage}
                      />
                      <FormText>Upload your profile picture here.</FormText>
                    </FormGroup>
                  </Card>
                </Col>
              </Row>
              <FormGroup>
                <Label for="exampleText">About me:</Label>
                <Input id="exampleText" name="text" type="textarea" />
              </FormGroup>
              {/* <FormGroup>
                <Label for="exampleFile">Profile picture</Label>
                <Input
                  type="file"
                  name="file"
                  placeholder="Upload image here"
                  onChange={UploadImage}
                />
                <FormText>Upload your profile picture here.</FormText>
              </FormGroup> */}
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

export default ProfilePage;
