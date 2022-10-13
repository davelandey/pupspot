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
} from "reactstrap";
import "./individualLocation.css";
import { RouteFetch } from "../Routes";
import { Endpoints } from "../Routes/Endpoints";
import { useState, useEffect } from "react";

const IndividualLocation = (props) => {
  // getting the URL params
  let { locationName } = useParams();

  //getting props of location data
  let locations = props.locations;
  let token = props.sessionToken
  console.log(token)

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

  //*-------GETTING MESSAGES CONNECTED TO AN INDIVIDUAL LOCATION-------



  //*-------CREATING A NEW MESSAGE ON FORM SUBMIT-------
  const [body, setBody] = useState("");
  const [messageData, setMessageData] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("post message on individual page");

    let bodyObject = {
      message: {
        body: body,
      },
    };

    try {
      await RouteFetch.post(Endpoints.message.add, bodyObject, callback, token);

      function callback(data) {
        setMessageData(data);
      }
    } catch (error) {
      console.error(error);
    }
  }


  console.log(messageData)

  return (
    <>
      <h1 className="header">{thisLocation.locationName}</h1>

      <Container className="content-container">
        <Row>
          <Col className="bg-light border" xs="2" md="3" lg="4">
            This is where the individual information will go! Stretch goal:
            WEATHER!
          </Col>
          <Col className="bg-light border map-column" xs="2" md="3" lg="4">
            <MapContainer
              className="map-container"
              center={[44.49080732835979, -73.18607660265336]}
              zoom={15}
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
            This is where the chat box will go
            {/* <ul className="message-ul">
              {messageData?.map((message) => (
                <li>
                  <span className="when">{`${message.when} `}</span>
                  <span className="userName">{`${message.userName} `}</span>
                  {message.body}
                </li>
              ))}
            </ul> */}
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
