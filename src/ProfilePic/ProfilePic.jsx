import { picStore } from "../States/PicStore";
import { profileStore } from "../States/ProfileStore";
import "./ProfilePic.css";
import { Link } from "react-router";
const ProfilePic = () => {
  const { pic } = picStore();
  const { setIsInfo } = profileStore();
  const handleClick = () => {
    setIsInfo(true);
    document.body.classList.add("overflowY");
  };
  return (
    <img
      src={pic}
      alt="avatar"
      className="blog-profile-pic"
      onClick={handleClick}
    />
  );
};

export default ProfilePic;
