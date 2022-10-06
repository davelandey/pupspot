import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import Header from './components/Header/Header';
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
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
 
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
