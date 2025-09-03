import { userStore } from "../States/UserStore"
import "./ProfileInfo.css"
import {Link} from "react-router"

const ProfileInfo = () => {
  const {firstName,lastName,email} = userStore();
  return (
    <div className="profile-info-div">
          <p className="profile-info-title">{firstName} Profile Info</p>
          <div className="user-info-spacer2"></div>
          <p className="profile-info-username-p">Username:</p>
          <p className="profile-info-user">{firstName} {lastName}</p>
          <p className="profile-info-email-p">Email:</p>
          <p className="profile-info-email">{email}</p>
          <div className="profile-info-btn-div">
            <Link to={"/blog"}>
            <button className="profile-info-blog-btn">Blog</button>
            </Link>
            <button className="profile-info-edit-btn">Edit Info</button>
          </div>
    </div>
  )
}

export default ProfileInfo
