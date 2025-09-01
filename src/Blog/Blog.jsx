import "./Blog.css"
import Post from "../Post/Post"
import Headers from "../Headers/Headers.jsx"
import { Spacer_1,Spacer_2,Spacer_3,Spacer_4 } from "../Spacer/Spacer.jsx"
import Footer from "../Footer/Footer.jsx"
import Addmodal from "../Addmodal/Addmodal.jsx"
import { useEffect, useState } from "react"
import Profile from "../Profile/Profile.jsx"
import ProfileEditor from "../ProfileEditor/ProfileEditor.jsx"
import ProfileInfo from "../ProfileInfo/ProfileInfo.jsx"
import { fetchPost } from "../API/API.js"
const Blog = () => {
  
  const [isNewPost,setIsNewPost] =useState(false);
  const [isprofile,setIsProfile] =useState(false);
  const [isEditProfile,setIsEditProfile] =useState(false);
  const [posts,setPosts] = useState([]);
  const [offset,setOffset] = useState(0);
  const [limit,setLimit] = useState(3);
  const openNewPostModal = ()=>{
    document.body.classList.add("overflowY")
    setIsNewPost(true);
  }
  const closeNewPostModal = ()=>{
    setIsNewPost(false);
    document.body.classList.remove("overflowY")
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
    setOffset(p => p+3)
  }
 useEffect(()=>{
    fetchPost(setPosts,offset,limit);
    console.log(posts)
  },[offset])
  return (
    <div className="background">
      <Profile open_modal={openProfileInfo}/>
      <ProfileEditor isProfile={isEditProfile} closeProfileEditor={closeProfileEditor}/>
      <ProfileInfo isProfile={isprofile} closeProfileInfo={closeProfileInfo} openProfileEditor={openProfileEditor}/>
      <Spacer_1></Spacer_1>
      <Headers/>
      <Spacer_2/>
      <Addmodal isNewPost={isNewPost} closeModal={closeNewPostModal} setPosts={setPosts}/>
      <div className='main-div'>
          <div className='posts'>
            {posts.map((post)=>(
              <Post key={post.post_id} post={post} posts={posts} setPosts={setPosts}/>
            ))}
          </div>
      </div>
      <Spacer_3/>
      <Footer items={posts} handleLoadMore={handleLoadMore} newpost={openNewPostModal} />
      <Spacer_4/>
    </div>
  )
}

export default Blog
