import { useState, useEffect } from "react";
import { RouteFetch } from "../Routes";
import { Endpoints } from "../Routes/Endpoints";
import { Routes, Route, NavLink } from "react-router-dom";
import ProfileView from "./ProfileView";

//!NEED TO USE A USER ID TO ACCESS DATA?
function ProfileIndex(props) {
  const token = props.sessionToken;

  const [userView, setUserView] = useState([]);

  const fetchUser = async () => {
    try {
      RouteFetch.get(Endpoints.user.getById, callback, token);
      function callback(data) {
        setUserView(data.user.getById);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="ProfileIndex">
      <Routes>
        <Route path="/user-profile" element={<ProfileView user={userView} />} />
      </Routes>
    </div>
  );
}
export default ProfileIndex;
