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
      {props?.user?._id === props?.userId ? (
        <ProfileEdit user={user} UploadImage={props.UploadImage} />
      ) : (
        <ProfileView user={user} UploadImage={props.UploadImage} />
      )}
    </>
  );
};

export default ProfileIndex;
