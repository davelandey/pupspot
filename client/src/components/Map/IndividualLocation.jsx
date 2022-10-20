import { useParams, NavLink } from "react-router-dom";
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
import { CgProfile } from "react-icons/cg";
import { ImProfile } from "react-icons/im";
import { IconContext } from "react-icons";
import { icon } from "leaflet";
import ProfileIndex from "../Profile/ProfileIndex";

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
        //resetting input field to be blank after submit
        setBody(" ");
        console.log(body);
      }
    } catch (error) {
      console.error(error);
    }
  }

  console.log(individualMessages);
  // console.log(individualMessages.message);

  // *-----------------------------USER MODAL
  const [modalProfile, setModalProfile] = useState(false);

  // FETCH BY ID
  // const [userProfileId, setuserProfileId] = useState("");
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
      //not the folllowing data:
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

  //Reformatting phone number
  function formatPhoneNumber(phoneNumberString) {
    var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = match[1] ? " " : "";
      return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
    }
    return null;
  }
  formatPhoneNumber("+12345678900"); // => "+1 (234) 567-8900"
  formatPhoneNumber("2345678900"); // => "(234) 567-8900"


  //Reformatting phone number
  function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = (match[1] ? ' ' : '');
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }
    return null;
  }
  formatPhoneNumber('+12345678900') // => "+1 (234) 567-8900"
  formatPhoneNumber('2345678900')   // => "(234) 567-8900"

  return (
    <>
      <Container className="content-container">
        <Row className="top-row">
          <Col className="bg-light border col-top">
            <div className="location-info-box">
              <h1 className="header">{thisLocation.locationName}</h1>
              <span className="location-info-category">Category:</span>{" "}
              {formatLocationCategory(thisLocation.locationCategory)}
              <br />
              <span className="location-info-category">Address:</span>
              <br />
              {thisLocation.streetAddress}
              <br />
              {thisLocation.city}, VT {thisLocation.zipcode}
              <br />
              <span className="location-info-category">Phone:</span>
              {formatPhoneNumber(thisLocation.phone)}
              <br />
              <span className="website-span">
                <a href={thisLocation.website}>Website</a>
              </span>
            </div>
          </Col>
          {/*  xs="2" md="3" lg="4" */}
          <Col className="bg-light border map-column col-bottom">
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
                  <div className="popup-text-container">
                    <h4 className="popup-header">
                      {thisLocation.locationName}
                    </h4>
                    <span className="popup-section-title">Category: </span>
                    {formatLocationCategory(thisLocation.locationCategory)}
                    <br />
                    <span className="popup-section-title">Address: </span>
                    <br />
                    {thisLocation.streetAddress}
                    <br />
                    {thisLocation.city}, {thisLocation.state}
                    <br></br>
                    <span className="popup-website">
                      <a href={thisLocation.website}>Website</a>
                    </span>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </Col>
        </Row>
        {/* MESSAGE BOX */}
        <Row className="message-box bottom-row">
          <Col
            className="chat-box bg-light border"
            style={{ overflow: "scroll", height: "500px" }}
          >
            <h4 className="message-header">
              Messages about {thisLocation.locationName}
            </h4>
            <ul className="message-ul">
              {individualMessages?.message?.map((message) => (
                <li>
                  <span className="when">{`${message?.timeStamp} `}</span>
                  <Button
                    className="profile-btn"
                    // outline
                    size="sm"
                    onClick={() => toggleUserProfile(message.userId)}
                  >
                    <IconContext.Provider
                      value={{ color: "gray", size: "16px" }}
                    >
                      <CgProfile />
                    </IconContext.Provider>
                  </Button>
                  <span className="userName">{`${message.userName} `}</span>
                  {/* insert profile view button */}
                  {/* 1. pass user information via props to this component
                    2. User info being fetched from profile index so we will need to figure out how to get the data HERE!
                    3. button will be connected to onClick function to trigger a modal to display profile information */}
                  <span className="message-body">{`${message.body} `}</span>
                  {/* ----------------------------USER PROFILE FROM MESSAGE BUTTON---------------------------- */}
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
                      User Profile View
                    </ModalHeader>
                    <ModalBody id="user-profile-modal">
                      <ProfileIndex
                        user={userProfile}
                        fetchUser={fetchUser}
                        userId={props.userId}
                        UploadImage={UploadImage}
                      />
                    </ModalBody>
                  </Modal>
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
                    value={body}
                    placeholder="Enter your message text here..."
                  />
                  <Button type="submit" color="success">
                    Submit
                  </Button>
                </InputGroup>
              </FormGroup>
            </Form>
          </Col>
          <Row className="placeholder"></Row>
        </Row>
      </Container>
    </>
  );
};

export default IndividualLocation;
