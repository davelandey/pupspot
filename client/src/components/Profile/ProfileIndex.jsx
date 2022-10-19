import { React } from "react";

import ProfileView from "../Profile/ProfileView";
import ProfileEdit from "../Profile/ProfileEdit";

const ProfileIndex = (props) => {
  const user = props.user;
  const fetchUser = props.fetchUser;
  const userId = props.userId;
  console.log(userId);

  return (
    <>
      <h1>PROFILE INDEX</h1>

      {/* TERINARY - props.user._id ===  props.userId - passed from App.js & ProfileIndex */}

      {props.user._id === props.userId ? (
        <ProfileEdit user={user} UploadImage={props.UploadImage} />
      ) : (
        <ProfileView user={user} UploadImage={props.UploadImage} />
      )}
    </>
  );
};

export default ProfileIndex;
