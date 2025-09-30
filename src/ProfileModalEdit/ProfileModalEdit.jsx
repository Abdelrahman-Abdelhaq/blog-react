import { authStore } from "../States/AuthStore";
import { editStore } from "../States/EditStore";
import { profileStore } from "../States/ProfileStore";
import "./ProfileModalEdit.css";

const ProfileModalEdit = () => {
  const setIsInfo = profileStore((state) => state.setIsInfo);
  const setIsEdit = profileStore((state) => state.setIsEdit);
  const userName = authStore((state) => state.user.name);
  const editName = editStore((state) => state.editName);
  const setEName = editStore((state) => state.setEName);
  const mail = authStore((state) => state.user.email);
  const editMail = editStore((state) => state.editMail);
  const setEMail = editStore((state) => state.setEMail);

  const handleInfo = () => {
    setIsEdit(false);
    setIsInfo(true);
  };
  const handleApply = () => {
    // setFirstName(editFirst == "" ? firstName : editFirst);
    // setEmail(editEmail == "" ? email : editEmail);
    // setEditFirst("");
    // setEditEmail(""); functionality yet to be added
    setIsEdit(false);
    document.documentElement.classList.remove("overflowY");
  };
  return (
    <>
      <div className="profile-modal-edit-firstname">
        <input
          type="text"
          className="profile-modal-edit-input"
          placeholder={userName}
          value={editName}
          onChange={(e) => {
            setEName(e.target.value);
          }}
        />
      </div>
      <div className="profile-modal-edit-email">
        <input
          type="text"
          className="profile-modal-edit-input"
          placeholder={mail}
          value={editMail}
          onChange={(e) => {
            setEMail(e.target.value);
          }}
        />
      </div>
      <div className="profile-modal-edit-btns">
        <button className="profile-modal-edit-info" onClick={handleInfo}>
          Info
        </button>
        <button className="profile-modal-edit-apply" onClick={handleApply}>
          Apply
        </button>
      </div>
    </>
  );
};

export default ProfileModalEdit;
