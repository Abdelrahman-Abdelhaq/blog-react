import { profilePicStore } from "../States/ProfilePicStore"
import "./ProfilePic.css"

const ProfilePic = ({open_modal}) => {
  const profilePic = profilePicStore((state)=> state.pic)
  return (
    <img src={profilePic} alt="avatar" onClick={open_modal} className='blog-profile-pic' />
  )
}

export default ProfilePic
