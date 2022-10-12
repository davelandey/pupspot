import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { useParams } from "react-router-dom";

const IndividualLocation = (props) => {
  // getting the URL params
  let { locationName } = useParams();

  //getting props of location data
  let locations = props.locations

  //reformatting URL params to same format as location name in JSON data
  let splitName = locationName.split("-");
  let stringName = splitName.join(" ");

  console.log(locations)

  //filtering the location data based on the params
  const filteredLocationtData = locations.filter(
    (location) => location.locationName.toLowerCase() === stringName
  );

  console.log(filteredLocationtData)

    return ( <>
    
    
    <h1>Hello from Individual location</h1>
    
    
    
    
    </> );
}
 
export default IndividualLocation;