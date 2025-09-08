import React from "react";
import "./ProfilePage.css";
import { profilePicStore } from "../States/ProfilePicStore";
import { userStore } from "../States/UserStore";
import { Link } from "react-router";

const ProfilePage = () => {
  const { pic } = profilePicStore();
  const { firstName, lastName, email, about } = userStore();
  return (
    <div className="background-div">
      <div className="main-div">
        <div className="profile-page-header"></div>
        <img src={pic} alt="profile-picture" className="profile-page-picture" />
        <p className="profile-page-username">{`${firstName} ${lastName}`}</p>
        <p className="profile-page-email">{email}</p>
        <p className="profile-page-about">{about}</p>
        <Link to={"/blog"}>
          <button className="profile-page-posts">Posts</button>
        </Link>
        <button className="profile-page-edit">Edit Info</button>
      </div>
    </div>
  );
};

export default ProfilePage;
