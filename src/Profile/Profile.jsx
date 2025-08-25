import React from 'react'
import avatar from "../assets/avatar.svg"
import "./Profile.css"

const Profile = ({openProfileEditor}) => {
  return (
    <img src={avatar} alt="avatar" onClick={openProfileEditor} className='blog-profile-pic' />
  )
}

export default Profile
