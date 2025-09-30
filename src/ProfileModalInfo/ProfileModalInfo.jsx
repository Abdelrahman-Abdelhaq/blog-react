import React, { useRef } from "react";
import "./ProfileModalInfo.css";
import { profileStore } from "../States/ProfileStore";
import { authStore } from "../States/AuthStore";
const ProfileModalInfo = () => {
  const userName = authStore.getState().user.name;
  const email = authStore.getState().user.email;
  const { setIsInfo, setIsEdit } = profileStore();
  const closeRef = useRef(null);
  const editRef = useRef(null);
  const handleClose = () => {
    setIsInfo(false);
    document.documentElement.classList.remove("overflowY");
  };
  const handleEdit = () => {
    setIsInfo(false);
    setIsEdit(true);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeRef.current.click();
    if (e.key === "Tab") editRef.current.click();
  };
  return (
    <>
      <div className="profile-modal-username">
        <p className="profile-modal-username-p">{`${userName}`}</p>
      </div>
      <div className="profile-modal-email">
        <p className="profile-modal-email-p">{email}</p>
      </div>
      <div className="profile-modal-info-btns">
        <button
          className="profile-modal-close"
          onClick={handleClose}
          ref={closeRef}
          autoFocus
          onKeyDown={handleKeyDown}
        >
          Close
        </button>
        <button
          className="profile-modal-edit"
          onClick={handleEdit}
          ref={editRef}
          onKeyDown={handleKeyDown}
        >
          Edit Info
        </button>
      </div>
    </>
  );
};

export default ProfileModalInfo;
