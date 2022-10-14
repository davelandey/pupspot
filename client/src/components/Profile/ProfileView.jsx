import ProfileIndex from "./ProfileIndex";
console.log("ProfileViewPRE");

function ProfileView(props) {
  console.log("ProfileViewPOST");

  const user = props.user;

  console.log("ProfileViewPOST");

  return (
    <>
      <h1>HELLO WORLD</h1>
      <ProfileIndex />

      <h4>{props.user}</h4>
    </>
  );
}

export default ProfileView;
