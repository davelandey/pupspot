import Map from "./Map";
import { useParams } from "react-router-dom";
import {Container, Row, Col} from "reactstrap"
import "./category-location.css"

const CategoryLocations = (props) => {
let locations = props.locations
let formatLocationCategory = props.formatLocationCategory
console.log(locations)

  // getting the URL params
  let { locationCategory } = useParams();

  console.log(locationCategory)

  //reformatting URL params to same format as category name name in JSON data
  let splitName = locationCategory.split("-");
  let stringName = splitName.join(" ");
  console.log(stringName)


  //filtering the location data based on the params
  const filteredLocationtData = locations.filter(
    (location) => location.locationCategory === stringName
  );

  let categoryLocations = filteredLocationtData;

  console.log(categoryLocations);


    return ( <>
    
<h1 className="center-align-text">{formatLocationCategory(stringName)}</h1>

<Container className="content-container">
<Row className="row">
  <Col className="map-column" >

    <Map formatLocationCategory={formatLocationCategory} locations={categoryLocations}/>

  </Col>
</Row>

</Container>



    
    </> );
}
 
export default CategoryLocations;