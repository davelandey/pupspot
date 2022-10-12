import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Header from "./components/Header/Header";
import Signup from "./components/Auth/Signup/Signup";
import Footer from "./components/Footer/Footer";
import Map from "./components/Map/Map";
import Profile from "./components/Profile/ProfilePage";
import PetProfile from "./components/PetProfile/PetProfilePage";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from "react";
import React from "react";
import { Endpoints } from "./components/Routes/Endpoints";
import { RouteFetch } from "./components/Routes";
import Auth from "./components/Auth/Auth";

function App() {
  //*----TOKEN----
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  // pass down to login button
  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(newToken);
  };

  const protectedViews = () => {
    return localStorage.getItem("token") === sessionToken ? (
      <Map token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  const [locations, setLocations] = useState([]);

  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDU4NTU2NjIxY2U0MTFkNDZjMDQ3ZCIsImlhdCI6MTY2NTUwMzQ4NiwiZXhwIjoxNjY1NTg5ODg2fQ.QpIms398MGB6Hxdhmjysrkc6pvUpf9m0Zv3GAVVV2tE"

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
    // fetchLocations();
  }, []);

  console.log(locations);

  return (
    <div className="App">
      <Header />

      <NavbarComponent sessionToken={sessionToken} clearToken={clearToken} updateToken={updateToken} />
      {/* <Profile/> */}
      <Map />
      <Footer />

      <Footer />
      <Routes>
        <Route path="/location" element={<Map />} />
        <Route path="/dog-parks" element={<Map />} />
        <Route path="/trails" element={<Map />} />
        <Route path="/restaurants" element={<Map />} />
        <Route path="/signup" element={<Signup updateToken={updateToken}/>} />
        <Route path="/user-profile" element={<Profile />} />
        <Route path="/pet-profile" element={<PetProfile />} />
      </Routes>
    </div>
  );
  {
    /* Removed because of duplicate login button issue. Will delete once we understand more about how data will be collected in form. */
  }
  {
    /* <Route path="/login" element={<Login />} /> */
  }
}

export default App;
