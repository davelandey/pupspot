import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Header from "./components/Header/Header";
import Signup from "./components/Signup/Signup";
// import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Map from "./components/Map/Map";
import Profile from "./components/Profile/ProfilePage";
import PetProfile from "./components/PetProfile/PetProfilePage";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <NavbarComponent />

      <Footer />
      <Routes>
        <Route path="/location" element={<Map />} />
        <Route path="/dog-parks" element={<Map />} />
        <Route path="/trails" element={<Map />} />
        <Route path="/restaurants" element={<Map />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user-profile" element={<Profile />} />
        <Route path="/pet-profile" element={<PetProfile />} />
      </Routes>
    </div>
  );
}

export default App;
