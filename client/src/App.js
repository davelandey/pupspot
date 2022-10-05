import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';
import Map from './components/Map';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Login />
      <Signup />
      <Profile />
      <Map />
      <Footer />

          {/* <Routes>
          <Route path="/" element={< />} />
          <Route path="/" element={< />} />
          <Route path="/" element={< />} />
          <Route path="/" element={< />} />
          <Route path="/" element={< />} />
          <Route path="/" element={< />} />
        </Routes> */}
    </div>
  );
}

export default App;
