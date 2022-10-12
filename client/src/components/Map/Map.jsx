import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { Container, Row, Col } from "reactstrap";
import { NavLink, Route, Routes } from "react-router-dom";
import "./Map.css";
import IndividualLocation from "./IndividualLocation";

const Map = (props) => {
  const locations = props.locations;

  return (
    <>
      <Container ClassName="MapContainer" fluid>
        <Row>
          <Col className="bg-light border" l="auto">
            <MapContainer
              center={[44.49080732835979, -73.18607660265336]}
              zoom={15}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='<a href=\"https://www.jawg.io\" target=\"_blank\">&copy; Jawg</a> - <a href=\"https://www.openstreetmap.org\" target=\"_blank\">&copy; OpenStreetMap</a>&nbsp;contributors'
                url={`https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=${process.env.REACT_APP_APIKEYMAP}`}
              />
              {/* Mapping over location data to make all markers appear */}
              {locations.map((location) => (
                <Marker
                  key={location.id}
                  position={[location.latitude, location.longitude]}
                >
                  <Popup>
                    <h4>{location.locationName}</h4>
                    <p>Category: {location.locationCategory}</p>
                    <p>
                      {location.streetAddress}
                      <br />
                      {location.city}, {location.state}
                    </p>
                    <p>
                      <a href={location.website}>Website</a>
                    </p>

                    <NavLink
                      className="nav-link"
                      to={location.locationName
                        .split(" ")
                        .join("-")
                        .toLowerCase()}
                      activeclassname="active-link"
                    >
                      More Info
                    </NavLink>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </Col>
        </Row>
      </Container>


    </>
  );
};

export default Map;
