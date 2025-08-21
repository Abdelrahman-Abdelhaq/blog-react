import "./Blog.css"
import Post from "../Post/Post"
import Headers from "../Headers/Headers.jsx"
import { Spacer_1,Spacer_2,Spacer_3,Spacer_4 } from "../Spacer/Spacer.jsx"
import Footer from "../Footer/Footer.jsx"
import Addmodal from "../Addmodal/Addmodal.jsx"
import { useState } from "react"
const Blog = () => {
  const [isNewPost,setIsNewPost] =useState(false);

  const newpost = ()=>{
    setIsNewPost(true);
  }
  const closeModal = ()=>{
    setIsNewPost(false);
  }
  return (
    <div className="background">
      <Spacer_1></Spacer_1>
      <Headers/>
      <Spacer_2/>
      <Addmodal isNewPost={isNewPost} closeModal={closeModal}/>
      <div className='main-div'>
          <div className='posts'>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
          </div>
      </div>
      <Spacer_3/>
      <Footer newpost={newpost}/>
      <Spacer_4/>
    </div>
  )
}

export default Blog
