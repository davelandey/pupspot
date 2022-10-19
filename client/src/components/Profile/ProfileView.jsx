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
// import IndividualLocation from "../Map/IndividualLocation";

const ProfileView = (props) => {
  const user = props.user;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  // PROFILE PIC UPLOAD
  // const [loading, setLoading] = useState(false);
  // const [image, setImage] = useState("https://picsum.photos/300/200");

  // -----------------_EMAIL ME
  function onEmailClick() {
    window.open(`mailto:${props.user?.email}`);
  }
  // USER PHOTO UPLOAD
  // const updateUserProfile = async (data) => {
  //   await RouteFetch.patch(
  //     Endpoints.user.update + props.user._id,
  //     data,
  //     () => props.fetchUser(props.user?._id),
  //     props.sessionToken
  //   );
  // };

  // const UploadImage = async (e) => {
  //   const files = e.target.files;
  //   const data = new FormData();
  //   data.append("file", files[0]);
  //   data.append("upload_preset", "pupspot");
  //   setLoading(true);
  //   try {
  //     const res = await fetch(
  //       "https://api.cloudinary.com/v1_1/dimzsxbfc/image/upload",
  //       {
  //         method: "POST",
  //         body: data,
  //       }
  //     );

  //     const File = await res.json();
  //     console.log(File.secure_url);

  //     setImage(File.secure_url);
  //     setLoading(false);
  //     updateUserProfile({ user: { profilePic: File.secure_url } });
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  useEffect(() => {}, [props.user]);

  return (
    <>
      {/* <Button color="danger" onClick={toggle}>
    <NavLink className="login-button" >User Profile</NavLink>
      </Button> */}
      <Container className="profileView" style={{ width: "95%" }}>
        {/* One row, across page */}
        <Row>
          {/* Column one - will adjust to size, automatically*/}
          <Col
            className="bg-light border"
            xxl="4"
            style={{ overflow: "scroll-y", height: "50%" }}
          >
            <h2>PROFILE VIEW</h2>
            <Form>
              <Row>
                <Col m="2">
                  <FormGroup className="FormGroup"></FormGroup>
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
                    <img alt="Sample" src={props.user?.profilePic} />
                    {/* add default image  */}

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
              <img alt="Sample" src="https://picsum.photos/300/200" />

              <CardBody>
                {/* figure out how to inport pet information and photo */}
                <CardTitle tag="h5">[Pet Name]</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>PET PROFILE PICTURE</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfileView;
