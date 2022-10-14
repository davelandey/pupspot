import Map from "./Map";
import { useParams } from "react-router-dom";

const CategoryLocations = (props) => {
let locations = props.locations
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
    
    
    <h1>Hello from Category Location!</h1>
    
    {/* Need to filter data to be passed to map component */}
    <Map locations={categoryLocations}/>
    
    </> );
}
 
export default CategoryLocations;