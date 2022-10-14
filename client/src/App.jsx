import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Header from "./components/Header/Header";
import Signup from "./components/Auth/Signup/Signup";
import Footer from "./components/Footer/Footer";
import PetProfile from "./components/PetProfile/PetProfilePage";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import Map from "./components/Map/Map";
import { useState, useEffect } from "react";
import React from "react";
import { Endpoints } from "./components/Routes/Endpoints";
import { RouteFetch } from "./components/Routes";
import Auth from "./components/Auth/Auth";
import IndividualLocation from "./components/Map/IndividualLocation";
import Home from "./components/Home/Home";
// EMILY PROFILE EDIT:
// import Profile from "./components/Profile/ProfilePage";

import ProfileIndex from "./components/Profile/ProfileIndex";

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

  // const protectedViews = () => {
  //   return localStorage.getItem("token") === sessionToken ? (
  //     <Map token={sessionToken} />
  //   ) : (
  //     <Auth updateToken={updateToken} />
  //   );
  // };

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
    fetchLocations();
  }, []);

  // console.log(locations);

  return (
    <div className="App">
      <Header />
      <NavbarComponent
        sessionToken={sessionToken}
        clearToken={clearToken}
        updateToken={updateToken}
      />
      {/* <Profile/> */}

      <div className="content-section">
        <Routes>
          <Route path="/" element={<Home locations={locations} />} />
          <Route path="/location" element={<Map locations={locations} />} />
          <Route path="/dog-parks" element={<Map locations={locations} />} />
          <Route path="/trails" element={<Map locations={locations} />} />
          <Route path="/restaurants" element={<Map locations={locations} />} />
          {/* Creates path based on location name */}
          <Route
            path="/:locationName"
            element={<IndividualLocation locations={locations} />}
          />
          <Route
            path="/signup"
            element={<Signup updateToken={updateToken} />}
          />
          {/* EMILY PROFILE EDIT: */}
          {/* <Route path="/user-profile" element={<Profile />} />*/}
          <Route
            path="/user-profile"
            element={<ProfileIndex sessionToken={sessionToken} />}
          />
          <Route path="/pet-profile" element={<PetProfile />} />
        </Routes>
      </div>
      <Footer />
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
