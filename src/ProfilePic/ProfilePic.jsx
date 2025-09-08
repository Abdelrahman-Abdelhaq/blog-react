import { profilePicStore } from "../States/ProfilePicStore";
import "./ProfilePic.css";
import { Link } from "react-router";
const ProfilePic = () => {
  const { pic } = profilePicStore();

  return (
    <Link to={"/profile"}>
      <img src={pic} alt="avatar" className="blog-profile-pic" />
    </Link>
  );
};

export default ProfilePic;
