import Map from "../Map/Map"

const Home = (props) => {
  const locations = props.locations  
    return ( <>
    
    <Map locations={locations}/>
    
    </> );
}
 
export default Home;