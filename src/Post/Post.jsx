import "./Post.css"
import image from "../assets/post-image.svg"
import avatar from "../assets/avatar.svg"
import { Link } from "react-router"

const Post = () => {
  return (
    <div className='post'>
            <div className='content'>
                <img src={image} alt="image " className="content-img" />
                <p className="content-genre">Design</p>
                <Link className="no-decoration" to={"/PostPage"}><p className="content-title">UX review <br /> presentations</p></Link>
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
