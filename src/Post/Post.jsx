import React from 'react'
import "./Post.css"
import image from "../assets/image.svg"
import avatar from "../assets/avatar.svg"

const Post = () => {
  return (
    <div className='post'>
            <div className='content'>
                <img src={image} alt="image " className="content-img" />
                <p className="content-genre">Design</p>
                <p className="content-title">UX review <br /> presentations</p>
                <p className="content-desc">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                <div className="content-info">
                    <img src={avatar} alt="avatar" className="content-avatar" />
                    <div className="content-data">
                        <p className="content-author">Olivia Rhye</p>
                        <p className="content-date">20 jan 2022</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Post
