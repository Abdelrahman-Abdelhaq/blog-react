import ProfileModalEdit from "../ProfileModalEdit/ProfileModalEdit";
import ProfileModalInfo from "../ProfileModalInfo/ProfileModalInfo";
import { picStore } from "../States/PicStore";
import { profileStore } from "../States/ProfileStore";
import { userStore } from "../States/UserStore";
import "./ProfileModal.css";

import React from "react";

const ProfileModal = () => {
  const { pic } = picStore();
  const { isInfo, isEdit, setIsInfo, setIsEdit } = profileStore();

  return (
    <div className="profile-modal-background" aria-modal="true">
      <div className="profile-modal">
        <div className="profile-modal-header">
          <img src={pic} alt="profile-picture" className="profile-modal-pic" />
        </div>
        {isInfo ? (
          <ProfileModalInfo></ProfileModalInfo>
        ) : isEdit ? (
          <ProfileModalEdit></ProfileModalEdit>
        ) : null}
      </div>
    </div>
  );
};

export default ProfileModal;
