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
                // attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                // url="https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token={accessToken}"
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
                // minZoom: 0
                // maxZoom: 22
                // subdomains: 'abcd'
                // accessToken: 'process.env.APIKEY'
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
