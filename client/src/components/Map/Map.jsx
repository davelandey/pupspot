import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { Container, Row, Col } from "reactstrap";
import { NavLink, Route, Routes } from "react-router-dom";
import "./Map.css";
import IndividualLocation from "./IndividualLocation";
import { IconContext } from "react-icons";
import { HiInformationCircle } from "react-icons/hi";
import { icon } from "leaflet";

const Map = (props) => {
  const locations = props.locations;

  //Function to capitalize category locations
  function formatLocationCategory(locationCategory) {
    let words = locationCategory.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    let formattedCategory = words.join(" ");
    console.log(formattedCategory);
    return formattedCategory;
  }
  //PAW MARKER:
  const markerIcon = icon({
    // !change evo
    iconUrl: `${process.env.REACT_APP_APIKEYICON}`,
    iconSize: [31, 46], // size of the icon
    iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -45], // point from which the popup should open relative to the iconAnchor
  });

  return (
    <>




      {/* <Container className="container"> */}
      {/* <Row className="map-row"> */}
      <Col className="map-col bg-light border" xs="auto" id="map-container">
            <MapContainer style={{ height: "100%", minHeight: "100%" }}
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
                //   //MARKER ICON:
        
                  icon={markerIcon}
                 > 
      <Popup>
                    <div className="popup-text-container">
                      <h4 className="popup-header">{location.locationName}</h4>
                      <span className="popup-section-title">Category: </span>
                      {formatLocationCategory(location.locationCategory)}
                      <br />
                      <span className="popup-section-title">Address: </span>
                      <br />
                      {location.streetAddress}
                      <br />
                      {location.city}, {location.state} {location.zipcode}
                      <br></br>
                      <span className="popup-website">
                        <a href={location.website}>Website</a>
                      </span>
                    </div>
                    <IconContext.Provider
                      value={{ color: "gray", className: "global-class-name" }}
                    >
                      <div className="info-icon-container">
                        <HiInformationCircle />
                        <NavLink
                          className="popup-navlink"
                          to={`/location/${location.locationName
                            .split(" ")
                            .join("-")
                            .toLowerCase()}`}
                          activeclassname="active-link"
                        >
                          {` More Info`}
                        </NavLink>
                      </div>
                    </IconContext.Provider>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </Col>
      {/* </Row> */}
      {/* </Container> */}
    </>
  );
};

export default Map;
