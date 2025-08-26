import "./Blog.css"
import Post from "../Post/Post"
import Headers from "../Headers/Headers.jsx"
import { Spacer_1,Spacer_2,Spacer_3,Spacer_4 } from "../Spacer/Spacer.jsx"
import Footer from "../Footer/Footer.jsx"
import Addmodal from "../Addmodal/Addmodal.jsx"
import { useState } from "react"
import Profile from "../Profile/Profile.jsx"
import ProfileEditor from "../ProfileEditor/ProfileEditor.jsx"
import ProfileInfo from "../ProfileInfo/ProfileInfo.jsx"
const Blog = () => {
  const [isNewPost,setIsNewPost] =useState(false);
  const [isprofile,setIsProfile] =useState(false);
  const [isEditProfile,setIsEditProfile] =useState(false);
  const [postsHeight,setPostsHeight] = useState(616);
  const openNewPostModal = ()=>{
    setIsNewPost(true);
  }
  const closeNewPostModal = ()=>{
    setIsNewPost(false);
  }
  const openProfileEditor= ()=>{
    setIsProfile(false);
    setIsEditProfile(true);
  }
  const closeProfileEditor= ()=>{
    setIsEditProfile(false);
  }
  const openProfileInfo = ()=>{
    if (isprofile === false && isEditProfile === false){
    setIsProfile(true);
    }
    else{
      return;
    }
  }
  const closeProfileInfo = ()=>{
    setIsProfile(false);
  }
  const handleLoadMore = ()=>{
    setPostsHeight(p => p+616)
  }
  return (
    <div className="background">
      <Profile open_modal={openProfileInfo}/>
      <ProfileEditor isProfile={isEditProfile} closeProfileEditor={closeProfileEditor}/>
      <ProfileInfo isProfile={isprofile} closeProfileInfo={closeProfileInfo} openProfileEditor={openProfileEditor}/>
      <Spacer_1></Spacer_1>
      <Headers/>
      <Spacer_2/>
      <Addmodal isNewPost={isNewPost} closeModal={closeNewPostModal}/>
      <div className='main-div'>
          <div className='posts' style={{height:`${postsHeight}px`}}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
          </div>
      </div>
      <Spacer_3/>
      <Footer handleLoadMore={handleLoadMore} newpost={openNewPostModal}/>
      <Spacer_4/>
    </div>
  )
}

export default Blog
