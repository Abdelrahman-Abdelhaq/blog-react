import React from 'react'
import avatar from "../assets/avatar.svg"
import "./Profile.css"

const Profile = ({open_modal}) => {
  return (
    <img src={avatar} alt="avatar" onClick={open_modal} className='blog-profile-pic' />
  )
}

export default Profile
