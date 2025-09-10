import { profileStore } from "../States/ProfileStore";
import { userStore } from "../States/UserStore";
import "./ProfileModalEdit.css";

const ProfileModalEdit = () => {
  const setIsInfo = profileStore((state) => state.setIsInfo);
  const setIsEdit = profileStore((state) => state.setIsEdit);
  const firstName = userStore((state) => state.firstName);
  const lastName = userStore((state) => state.lastName);
  const email = userStore((state) => state.email);
  const setFirstName = userStore((state) => state.setFirstName);
  const setLastName = userStore((state) => state.setLastName);
  const setEmail = userStore((state) => state.setEmail);
  const editFirst = userStore((state) => state.editFirst);
  const editLast = userStore((state) => state.editLast);
  const editEmail = userStore((state) => state.editEmail);
  const setEditFirst = userStore((state) => state.setEditFirst);
  const setEditLast = userStore((state) => state.setEditLast);
  const setEditEmail = userStore((state) => state.setEditEmail);
  const handleInfo = () => {
    setIsEdit(false);
    setIsInfo(true);
  };
  const handleApply = () => {
    setFirstName(editFirst == "" ? firstName : editFirst);
    setLastName(editLast == "" ? lastName : editLast);
    setEmail(editEmail == "" ? email : editEmail);
    setEditFirst("");
    setEditLast("");
    setEditEmail("");
    setIsEdit(false);
    document.body.classList.remove("overflowY");
  };
  return (
    <>
      <div className="profile-modal-edit-firstname">
        <input
          type="text"
          className="profile-modal-edit-input"
          placeholder={firstName}
          value={editFirst}
          onChange={(e) => {
            setEditFirst(e.target.value);
          }}
        />
      </div>
      <div className="profile-modal-edit-lastname">
        <input
          type="text"
          className="profile-modal-edit-input"
          placeholder={lastName}
          value={editLast}
          onChange={(e) => {
            setEditLast(e.target.value);
          }}
        />
      </div>
      <div className="profile-modal-edit-email">
        <input
          type="text"
          className="profile-modal-edit-input"
          placeholder={email}
          value={editEmail}
          onChange={(e) => {
            setEditEmail(e.target.value);
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
