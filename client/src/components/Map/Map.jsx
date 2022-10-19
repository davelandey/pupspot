import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { Container, Row, Col } from "reactstrap";
import { NavLink, Route, Routes } from "react-router-dom";
import "./Map.css";
import IndividualLocation from "./IndividualLocation";
import { icon } from "leaflet";

const Map = (props) => {
  const locations = props.locations;
  const formatLocationCategory = props.formatLocationCategory;

  //PAW MARKER:
  const markerIcon = icon({
    // !change evo
    iconUrl: `https://api.geoapify.com/v1/icon?size=xx-large&type=awesome&color=%233e9cfe&icon=paw&apiKey=${process.env.REACT_MY_APIKEYICON}`,
    iconSize: [31, 46], // size of the icon
    iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -45], // point from which the popup should open relative to the iconAnchor
  });

  return (
    <>
      <Container>
        <Row className="map-row my-auto">
          <Col className="map-col bg-light border" xs="auto">
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
                  //MARKER ICON:
                  icon={markerIcon}
                >
                  <Popup>
                    <h4>{location.locationName}</h4>
                    {/*! This is causing an issue */}
                    {/* <p>Category: {formatLocationCategory(location.locationCategory)}</p> */}
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
                      to={`/location/${location.locationName
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`}
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
