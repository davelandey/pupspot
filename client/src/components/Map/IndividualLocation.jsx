import { useParams } from "react-router-dom";
import Map from "./Map";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
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
import { icon } from "leaflet";
import ProfileView from "../Profile/ProfileView";
import ProfileEdit from "../Profile/ProfileEdit";

const IndividualLocation = (props) => {
  // getting the URL params
  let { locationName } = useParams();
  console.log(props);
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
    const time = date.toLocaleTimeString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    let bodyObject = {
      message: {
        body: body,
        timeStamp: `${time}`,
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

  // !FETCH BY ID
  const [userProfileId, setuserProfileId] = useState("");
  const [userProfile, setUserProfile] = useState({});

  const fetchUser = async (userId) => {
    try {
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
  console.log(userProfile);

  // USER PHOTO UPLOAD
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("https://picsum.photos/300/200");

  const updateUserProfile = async (data) => {
    await RouteFetch.patch(
      Endpoints.user.update + userProfile._id,
      data,
      () => fetchUser(userProfile?._id),
      props.sessionToken
    );
  };
  console.log(props.user?._id);

  //!UPLOAD PHOTO
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
      console.log(props.user);
      updateUserProfile({ user: { profilePic: File.secure_url } });
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {}, [props.user]);

  //PAW MARKER:
  const markerIcon = icon({
    // !change env?
    iconUrl: `https://api.geoapify.com/v1/icon?size=xx-large&type=awesome&color=%233e9cfe&icon=paw&apiKey=032e6c0443c3405f87b605c4c5e314ab`,
    iconSize: [31, 46], // size of the icon
    iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -45], // point from which the popup should open relative to the iconAnchor
  });

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
                //MARKER ICON:
                icon={markerIcon}
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
                    {/* __________________________________________________________EMILY WORKING ABOVE */}
                    <ModalHeader toggle={toggleUserProfile}>
                      User Profile
                    </ModalHeader>
                    <ModalBody id="user-profile-modal">
                      <Card
                        style={{
                          width: "18rem",
                        }}
                      >
                        {/* <img alt="Sample" src={props.user?.profilePic} /> */}
                        {/* add default image  */}

                        <CardBody>
                          {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                          Card subtitle
                        </CardSubtitle> */}

                          {/* <CardText>PROFILE PICTURE</CardText> */}

                          {/* ROB: Make a turnary if userProfile._id == props.userId then show the button. 
                          DONT FORGET TO PASS THE userIdProps to the component from the App.jsx */}
                          <Input
                            type="file"
                            name="file"
                            placeholder="Upload image here"
                            onChange={UploadImage}
                          />
                        </CardBody>
                        <ProfileView user={userProfile} fetchUser={fetchUser} />
                        <ProfileEdit user={userProfile} fetchUser={fetchUser} />
                      </Card>
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
