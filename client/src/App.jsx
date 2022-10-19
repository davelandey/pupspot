import "./App.css";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
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
  const [userId, setUserId] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
    //ROB: Have another IF STATEMENT for localstorage getItem("userId") if you have it
    // then setUserId -

    //USESTATE FOR userId
    if (localStorage.getItem("userId")) {
      setSessionToken(localStorage.getItem("userId"));
    }
  }, []);

  // ID -----
  useEffect(() => {
    if (localStorage.getItem("id")) {
      setUserId(localStorage.getItem("id"));
    }
  }, []);

  // pass down to login button
  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const updateToken = (newToken, id) => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("userId", id);
    setSessionToken(newToken);
    console.log(newToken);
    setUserId(id);
    //ROB: update or set the userId setUserId(id)
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

  //Function to capitalize category locations
  function formatLocationCategory(locationCategory) {
    let words = locationCategory.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    let formattedCategory = words.join(" ");
    console.log(formattedCategory);
    return formattedCategory;
  }

  const [userView, setUserView] = useState([]);

  // const fetchUser = async () => {
  //   try {
  //     console.log("fetch user works?");
  //     RouteFetch.get(Endpoints.user.getById, callback);
  //     function callback(data) {
  //       // !DOES NOT WORK:
  //       console.log("callback user works?");
  //       setUserView(data.user.getById);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUser();
  // }, []);

  //*---------------------------------------------EMILY------USER PROFILE FETCH------

  return (
    <div className="App">
      <Header />

      <NavbarComponent
        sessionToken={sessionToken}
        clearToken={clearToken}
        updateToken={updateToken}
        setUserId={setUserId}
        userId={userId}
      />

      <div className="content-section">
        <Routes>
          <Route path="/" element={<Home locations={locations} />} />

          {/* Creates path based on location category */}
          <Route
            path="/category/:locationCategory"
            element={
              <CategoryLocations
                formatLocationCategory={formatLocationCategory}
                locations={locations}
              />
            }
          />

          {/* Creates path based on location name */}
          <Route
            path="/location/:locationName"
            element={
              locations?.length > 0 ? (
                <IndividualLocation
                  formatLocationCategory={formatLocationCategory}
                  locations={locations}
                  sessionToken={sessionToken}
                  userId={userId}
                />
              ) : (
                // <h1>Loading...</h1>
                <Loading />
              )
            }
          />
          <Route
            path="/signup"
            element={<Signup setUserId={setUserId} updateToken={updateToken} />}
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
