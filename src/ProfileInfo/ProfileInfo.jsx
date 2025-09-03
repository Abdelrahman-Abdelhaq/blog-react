import { infoCardStore } from "../States/InfoCardStore";
import { profilePicStore } from "../States/ProfilePicStore";
import { userStore } from "../States/UserStore";
import "./ProfileInfo.css"
import { Link } from "react-router";

const ProfileInfo = () => {
  const {username,email} = userStore();
  const {pic} = profilePicStore();
  const {modal,setModal} = infoCardStore();
  const handleClose = () => {
    setModal(false);
  }
  const handleEdit = () => {
    setModal(false);
  }
  if (modal === false) return null;
  return (
    <div className='profile-info-card'>
      <div className='profile-card-div'>
        <div className='profile-card-background'></div>
        <div className='profile-card-avatar-div'>
            <img src={pic} alt="avatar" className='profile-card-avatar' />
        </div>
        <div className='profile-card-user-info-div'>
            <p className='profile-card-user-name'>{username}</p>
            <p className='profile-card-user-email'>{email}</p>
        </div>
        <hr  className='profile-card-hr'/>
        <div className='profile-card-btn-div'>
            <button className='profile-card-close-btn' onClick={handleClose}>Close</button>
            <Link to={'/edit'}><button className='profile-card-edit-btn' onClick={handleEdit}>
              Edit Profile
              </button>
              </Link>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
