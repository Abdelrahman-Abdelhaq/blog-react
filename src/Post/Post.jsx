import "./Post.css"
import { Link } from "react-router"

const Post = ({post}) => {
  return (
    <div className='post' >
            <div className='content'>
                <img src={post.image} alt="image " className="content-img" />
                <p className="content-category">{post.category}</p>
                <Link className="no-decoration" to={"/PostPage"}><p className="content-title">{post.title}</p></Link>
                <p className="content-desc">{post.desc}</p>
                <div className="content-info">
                    <img src={post.avatar} alt="avatar" className="content-avatar" />
                    <div className="content-data">
                        <p className="content-author">{post.author}</p>
                        <p className="content-date">{post.date}</p>
                    </div>
                </div>
            </div>   
    </div>    
  )
}

export default Post
