import "./Post.css"
import image from "../assets/post-image.svg"
import avatar from "../assets/avatar.svg"
import { Link } from "react-router"
import moment from "moment"
import { deletePost, editPost } from "../API/API"
import EditButton from "../EditButton/EditButton"

const Post = ({post,setPosts}) => {
  const newDate = moment(post.post_date).format('DD-MMM-YYYY');
  const handleDelete= () => {
    deletePost(post.post_id,setPosts);
  }
  const handleEdit = () => {
    editPost(post.post_category,post.post_title,post.post_description,post.post_id)
  }
  return (
    <div className='post' >
            <div className='content'>
              <EditButton/>
              <div className="delete-post-div">
                <button className="delete-post-btn" onClick={handleDelete}></button>
              </div>
                <img src={image} alt="image " className="content-img" />
                <p className="content-category">{post.post_category}</p>
                <Link to={'/postpage'} className="no-decoration"><p className="content-title">{post.post_title}</p></Link>
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
