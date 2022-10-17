import { React } from "react";
import { useState } from "react";
import { RouteFetch } from "../Routes";
import { Endpoints } from "../Routes/Endpoints";

const ProfileIndex = (props) => {
  const [userProfileId, setuserProfileId] = useState("");
  const [userProfile, setUserProfile] = useState();
  const [modalProfile, setModalProfile] = useState(false);

  const fetchUser = async (userId) => {
    try {
      RouteFetch.get(Endpoints.user.getById + userId, callback);
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
  console.log(userProfile);
  return (
    <>
      <h1>PROFILE INDEX</h1>
    </>
  );
};

export default ProfileIndex;
