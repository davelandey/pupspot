import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { Container, Row, Col } from "reactstrap";
import "./Map.css";

const Map = (props) => {
   
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
                url = {`https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=${process.env.REACT_APP_APIKEYMAP}`}
              />
              <Marker position={[44.49080732835979, -73.18607660265336]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Map;
