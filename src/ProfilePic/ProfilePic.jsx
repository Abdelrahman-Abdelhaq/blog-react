import React from 'react'
import "./ProfilePic.css"

const ProfilePic = ({profilePic,open_modal}) => {
  return (
    <img src={profilePic} alt="avatar" onClick={open_modal} className='blog-profile-pic' />
  )
}

export default ProfilePic
