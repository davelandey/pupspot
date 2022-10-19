import { React } from "react";
import { useState } from "react";
import { RouteFetch } from "../Routes";
import { Endpoints } from "../Routes/Endpoints";
import ProfileView from "./ProfileView";
import ProfileEdit from "./ProfileEdit";

const ProfileIndex = (props) => {
  
  const [userProfile, setUserProfile] = useState();
  const [modalProfile, setModalProfile] = useState(false);
  const token = props.sessionToken;

  const fetchUser = async (userId) => {
    try {
      RouteFetch.get(Endpoints.user.getById + userId, callback, token);
      function callback(data) {
        console.log("callback user works?", data);
        setUserProfile(data.user);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const toggleUserProfile = (userId) => {
    fetchUser(userId);
    setModalProfile(!modalProfile);
  };
console.log("below here is the console log")
  console.log(userProfile);

  return (
    <>
      <ProfileView />
    </>
  );
};

export default ProfileIndex;
