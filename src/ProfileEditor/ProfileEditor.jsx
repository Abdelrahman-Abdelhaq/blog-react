import React from 'react'
import avatar from "../assets/avatar.svg"
import edit from "../assets/edit.svg"
import "./ProfileEditor.css"

const ProfileEditor = ({isProfile,closeProfileEditor}) => {
    if(isProfile === false) return null;
  return (
    <div className='profile-card'>
      <div className='profile-info-main-div'>
        <div className='profile-pic-div'>
            <img src={avatar} alt="profile-pic" className='profile-pic'/>
            <img src={edit} alt="edit-icon" className='edit-icon'/>
        </div>
        <div className='profile-info-div'>
            <p className='edit-profile-p'>Edit Profile</p>
            <p className='update-info-p'>Update your information</p>
        </div>
      </div>
      <hr className='info-break' />
      <div className='username-div'>
        <p className='username-p'>Username</p>
        <input type="text" className='username-input' />
      </div>
      <div className='email-div'>
        <p className='email-p'>Email</p>
        <input type="text" className='email-input'/>
      </div>
      <div className='password-div'>
        <p className='password-p'>Password</p>
        <input type="text" className='password-input'/>
      </div>
      <hr className='info-break'/>
      <div className='info-btn-div'>
        <button className='info-cancel' onClick={closeProfileEditor}>Cancel</button>
        <button className='info-save'>Save Changes</button>
      </div>
    </div>
  )
}

export default ProfileEditor
