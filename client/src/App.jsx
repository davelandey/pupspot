import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Header from "./components/Header/Header";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Map from "./components/Map/Map";
import Profile from "./components/Profile/ProfilePage";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import React from "react";
import {Endpoints} from "./components/Routes/Endpoints";
import { RouteFetch } from "./components/Routes";

function App() {
  const [locations, setLocations] = useState([]);

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDU4NTU2NjIxY2U0MTFkNDZjMDQ3ZCIsImlhdCI6MTY2NTUwMzQ4NiwiZXhwIjoxNjY1NTg5ODg2fQ.QpIms398MGB6Hxdhmjysrkc6pvUpf9m0Zv3GAVVV2tE"
  const fetchLocations = async () => {
    
    console.log("getall locations");

    try {
      RouteFetch.get(Endpoints.location.getall, callback);

      function callback(data) {
        setLocations(data.location);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

console.log(locations)


  return (
    <div className="App">
      <Header />
      <NavbarComponent />
      {/* <Profile/> */}
      <Footer />

      <Routes>
        <Route path="/location" element={<Map />} />
        <Route path="/dog-parks" element={<Map />} />
        <Route path="/trails" element={<Map />} />
        <Route path="/restaurants" element={<Map />} />
        {/* Removed because of duplicate login button issue. Will delete once we understand more about how data will be collected in form. */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/user-profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
