import ProfileInfo from "../ProfileInfo/ProfileInfo";
import { profilePicStore } from "../States/ProfilePicStore"
import { profileStore } from "../States/ProfileStore";
import "./ProfilePage.css"

const ProfilePage = () => {
  const {isInfo,isEdit} = profileStore();
  const {pic} = profilePicStore();
  return (
    <div className="profile-info-main-div">
      <div className="content-div">
        <div className="profile-info-pic-div">
          <img src={pic} alt="" className="profile-info-pic"/>
        </div>
        <div className="profile-info-spacer">
          <hr className="profile-info-vertical-line"/>
        </div>
        {isInfo ?<ProfileInfo></ProfileInfo> : <></>}
      </div>    
    </div>
  )
}

export default ProfilePage
