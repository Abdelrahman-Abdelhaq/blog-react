import { infoCardStore } from "../States/InfoCardStore";
import { profilePicStore } from "../States/ProfilePicStore"
import "./ProfilePic.css"

const ProfilePic = () => {
  const {pic} = profilePicStore();
  const {setModal} = infoCardStore();
  const handleClick = () =>{
    setModal(true);
  }
  return (
    <img src={pic} alt="avatar" onClick={handleClick} className='blog-profile-pic' />
  )
}

export default ProfilePic
