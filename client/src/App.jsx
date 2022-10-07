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

function App() {
  return (
    <div className="App">
      <Header />
      <NavbarComponent />
      <p className="pupSpot-text">PupSpot</p>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <Login />
      <Signup />
      <Profile/>
      <Map />
      <Footer />

      <Routes>
        <Route path="/location" element={<Map />} />
        <Route path="/dog-parks" element={<Map />} />
        <Route path="/trails" element={<Map />} />
        <Route path="/restaurants" element={<Map />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/profile" element={<Profile/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
