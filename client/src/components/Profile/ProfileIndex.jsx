import { React } from "react";
<<<<<<< HEAD
=======

>>>>>>> develop
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
      {/* props.user._id ===  props.userId - passed from App.js & ProfileIndex */}

      {props.user._id === props.userId ? (
        <ProfileEdit user={user} UploadImage={props.UploadImage} />
      ) : (
        <ProfileView user={user} />
      )}
<<<<<<< HEAD
=======

>>>>>>> develop
    </>
  );
};

export default ProfileIndex;
