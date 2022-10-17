import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Header from "./components/Header/Header";
import Signup from "./components/Auth/Signup/Signup";
import Footer from "./components/Footer/Footer";
import PetProfileIndex from "./components/PetProfile/PetProfileIndex";
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
import Loading from "./components/Loading/Loading";
import CategoryLocations from "./components/Map/CategoryLocations";
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

  //*------LOCATION FETCH------
  const [locations, setLocations] = useState([]);

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

  return (
    <div className="App">
      <Header />
      <NavbarComponent
        sessionToken={sessionToken}
        clearToken={clearToken}
        updateToken={updateToken}
      />

      <div className="content-section">
        <Routes>
          <Route path="/" element={<Home locations={locations} />} />
          <Route
            path="/category/:locationCategory"
            element={<CategoryLocations locations={locations} />}
          />
          {/* <Route path="/dog-parks" element={<CategoryLocations locations={locations} />} />
          <Route path="/trails" element={<CategoryLocations locations={locations} />} />
          <Route path="/restaurants" element={<CategoryLocations locations={locations} />} /> */}
          {/* Creates path based on location name */}
          <Route
            path="/location/:locationName"
            element={
              locations?.length > 0 ? (
                <IndividualLocation
                  locations={locations}
                  sessionToken={sessionToken}
                />
              ) : (
                // <h1>Loading...</h1>
                <Loading />
              )
            }
          />
          <Route
            path="/signup"
            element={<Signup updateToken={updateToken} />}
          />
          <Route
            path="/pet-profile"
            element={<PetProfileIndex sessionToken={sessionToken} />}
          />

          <Route
            path="/user-profile"
            element={<ProfileIndex sessionToken={sessionToken} />}
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
