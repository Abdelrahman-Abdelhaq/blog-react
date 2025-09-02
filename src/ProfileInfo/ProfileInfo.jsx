import { profilePicStore } from "../States/ProfilePicStore";
import "./ProfileInfo.css"

const ProfileInfo = ({userName,userEmail,isProfile,closeProfileInfo,openProfileEditor}) => {
  const profilePic = profilePicStore((state)=> state.pic)
  if (isProfile === false) return null;
  return (
    <div className='profile-info-card'>
      <div className='profile-card-div'>
        <div className='profile-card-background'></div>
        <div className='profile-card-avatar-div'>
            <img src={profilePic} alt="avatar" className='profile-card-avatar' />
        </div>
        <div className='profile-card-user-info-div'>
            <p className='profile-card-user-name'>{userName}</p>
            <p className='profile-card-user-email'>{userEmail}</p>
        </div>
        <hr  className='profile-card-hr'/>
        <div className='profile-card-btn-div'>
            <button className='profile-card-close-btn' onClick={closeProfileInfo}>Close</button>
            <button className='profile-card-edit-btn' onClick={openProfileEditor}>Edit Profile</button>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
