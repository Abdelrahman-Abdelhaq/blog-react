import React from 'react'
import "./ProfileInfo.css"
import avatar from "../assets/avatar.svg"

const ProfileInfo = ({isProfile,closeProfileInfo,openProfileEditor}) => {
  if (isProfile === false) return null;
  return (
    <div className='profile-info-card'>
      <div className='profile-card-div'>
        <div className='profile-card-background'></div>
        <div className='profile-card-avatar-div'>
            <img src={avatar} alt="avatar" className='profile-card-avatar' />
        </div>
        <div className='profile-card-user-info-div'>
            <p className='profile-card-user-name'>Olivia</p>
            <p className='profile-card-user-email'>olivia@gmail.com</p>
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
