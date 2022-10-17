import { useParams } from "react-router-dom";
import Map from "./Map";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormGroup,
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "./individualLocation.css";
import { RouteFetch } from "../Routes";
import { Endpoints } from "../Routes/Endpoints";
import { useState, useEffect } from "react";
import ProfileView from "../Profile/ProfileView";

const IndividualLocation = (props) => {
  // getting the URL params
  let { locationName } = useParams();

  //getting props of location data
  let locations = props.locations;
  let token = props.sessionToken;
  let formatLocationCategory = props.formatLocationCategory;
  console.log(token);

  //reformatting URL params to same format as location name in JSON data
  let splitName = locationName.split("-");
  let stringName = splitName.join(" ");

  console.log(locations);

  //filtering the location data based on the params
  const filteredLocationtData = locations.filter(
    (location) => location.locationName.toLowerCase() === stringName
  );

  let thisLocation = filteredLocationtData[0];

  console.log(thisLocation);

  //*-------GET MESSAGES CONNECTED TO AN INDIVIDUAL LOCATION-------
  const [individualMessages, setIndividualMessages] = useState();

  const fetchMessages = async () => {
    console.log("get messages by location");

    try {
      RouteFetch.get(
        Endpoints.message.getByLocation + locationName,
        callback,
        token
      );

      function callback(data) {
        setIndividualMessages(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  console.log(individualMessages);

  //*-------CREATE A NEW MESSAGE ON FORM SUBMIT-------
  const [body, setBody] = useState("");
  const [messageData, setMessageData] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("post message on individual page");

         //Setting the date & time of submitted message
         const date = new Date();
         const formattedDate = date.toDateString();
         const time = date.toLocaleTimeString();

    let bodyObject = {
      message: {
        body: body,
        timeStamp: `${formattedDate} ${time}`,
      },
    };

    try {
      await RouteFetch.post(
        Endpoints.message.add + locationName,
        bodyObject,
        callback,
        token
      );

      function callback(data) {
        setMessageData(data);
        fetchMessages();
      }
    } catch (error) {
      console.error(error);
    }

    //resetting input field to be blank after submit
    this.setBody(" ");
    console.log(body);
  }

  console.log(individualMessages);
  // console.log(individualMessages.message);



  // *-----------------------------USER MODAL
  const [modalProfile, setModalProfile] = useState(false);
  const [userProfileId, setuserProfileId] = useState("");
  const [userProfile, setUserProfile] = useState();

  // FETCH BY ID
  const fetchUser = async (userId) => {
    try {
      console.log("fetch user works?");
      RouteFetch.get(Endpoints.user.getById + userId, callback);
      function callback(data) {
        console.log("callback user works?", data);
        setUserProfile(data.user);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const toggleUserProfile = (userId) => {
    fetchUser(userId);
    setModalProfile(!modalProfile);
  };

  return (
    <>
      <h1 className="header">{thisLocation.locationName}</h1>

      <Container className="content-container">
        <Row>
          <Col className="bg-light border location-info-box">
            Category: {formatLocationCategory(thisLocation.locationCategory)}
            <br />
            {thisLocation.streetAddress}
            <br />
            {thisLocation.city}, VT {thisLocation.zipcode}
            <br />
            {thisLocation.phone}
            <br />
            <a href={thisLocation.website}>Website</a>
            <br />
            This is where the individual information will go! Stretch goal:
            WEATHER!
          </Col>
          {/*  xs="2" md="3" lg="4" */}
          <Col className="bg-light border map-column">
            <MapContainer
              className="map-container"
              center={[thisLocation.latitude, thisLocation.longitude]}
              zoom={16}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='<a href=\"https://www.jawg.io\" target=\"_blank\">&copy; Jawg</a> - <a href=\"https://www.openstreetmap.org\" target=\"_blank\">&copy; OpenStreetMap</a>&nbsp;contributors'
                url={`https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=${process.env.REACT_APP_APIKEYMAP}`}
              />
              <Marker
                key={thisLocation.id}
                position={[thisLocation.latitude, thisLocation.longitude]}
              >
                <Popup>
                  <h4>{thisLocation.locationName}</h4>
                  <p>Category: {thisLocation.locationCategory}</p>
                  <p>
                    {thisLocation.streetAddress}
                    <br />
                    {thisLocation.city}, {thisLocation.state}
                  </p>
                  <p>
                    <a href={thisLocation.website}>Website</a>
                  </p>
                </Popup>
              </Marker>
            </MapContainer>
          </Col>
        </Row>
        {/* MESSAGE BOX */}
        <Row className="message-box">
          <Col
            className="chat-box bg-light border"
            style={{ overflow: "scroll", height: "500px" }}
          >
            <ul className="message-ul">
              {individualMessages?.message?.map((message) => (
                <li>
                  <span className="when">{`${message?.timeStamp} `}</span>
                  <span className="userName">{`${message.userName} `}</span>
                  {/* insert profile view button */}
                  {/* 1. pass user information via props to this component
                    2. User info being fetched from profile index so we will need to figure out how to get the data HERE!
                    3. button will be connected to onClick function to trigger a modal to display profile information */}
                  <span className="message-body">{`${message.body} `}</span>

                  {/* __________________________________________________________EMILY WORKING ON PROFILE MODAL */}
                  <Button
                    color="danger"
                    onClick={() => toggleUserProfile(message.userId)}
                  >
                    User Profile
                  </Button>
                  <Modal
                    isOpen={modalProfile}
                    toggle={toggleUserProfile}
                    size="xl"
                    style={{
                      width: "80%",
                      height: "90%",
                      overflow: "scroll-y",
                    }}
                  >
                    <ModalHeader toggle={toggleUserProfile}>
                      User Profile
                    </ModalHeader>
                    <ModalBody id="user-profile-modal">
                      <ProfileView user={userProfile} />
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                  </Modal>

                  {/* __________________________________________________________EMILY WORKING ABOVE */}
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* MESSAGE FORM */}
        <Row>
          <Col className="message-inputs">
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <InputGroup size="lg">
                  <Input
                    onChange={(e) => {
                      setBody(e.target.value);
                    }}
                    placeholder="Enter your message text here..."
                  />
                  <Button type="submit" color="success">
                    Submit
                  </Button>
                </InputGroup>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IndividualLocation;
