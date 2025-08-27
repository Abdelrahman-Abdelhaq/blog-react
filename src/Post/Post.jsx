import "./Post.css"
import image from "../assets/post-image.svg"
import avatar from "../assets/avatar.svg"
import { Link } from "react-router"
import moment from "moment"

const Post = ({post}) => {
  const newDate = moment(post.post_date).format('DD-MMM-YYYY');
  return (
    <div className='post' >
            <div className='content'>
                <img src={image} alt="image " className="content-img" />
                <p className="content-category">{post.post_category}</p>
                <Link className="no-decoration" to={"/PostPage"}><p className="content-title">{post.post_title}</p></Link>
                <p className="content-desc">{post.post_description}</p>
                <div className="content-info">
                    <img src={avatar} alt="avatar" className="content-avatar" />
                    <div className="content-data">
                        <p className="content-author">{post.post_author}</p>
                        <p className="content-date">{newDate}</p>
                    </div>
                </div>
            </div>   
    </div>    
  )
}

export default Post
