import "./Post.css"
import image from "../assets/post-image.svg"
import { Link } from "react-router"
import moment from "moment"
import { deletePost, editPost } from "../API/API"
import EditButton from "../EditButton/EditButton"
import { profilePicStore } from "../States/ProfilePicStore"
import { userStore } from "../States/UserStore"

const Post = ({post,setPosts}) => {
  const {firstName} = userStore()
  const profilePic = profilePicStore((state) => state.pic)
  const newDate = moment(post.post_date).format('DD-MMM-YYYY');
  const handleDelete= () => {
    deletePost(post.post_id,setPosts);
  }
  return (
    <div className='post' >
            <div className='content'>
              <EditButton setPosts={setPosts} 
              id={post.post_id}
              category={post.post_category} 
              title={post.post_title} 
              description={post.post_description}/>
              <div className="delete-post-div">
                <button className="delete-post-btn" onClick={handleDelete}></button>
              </div>
                <img src={image} alt="image " className="content-img" />
                <p className="content-category">{post.post_category}</p>
                <Link to={'/postpage'} className="no-decoration"><p className="content-title">{post.post_title}</p></Link>
                <p className="content-desc">{post.post_description}</p>
                <div className="content-info">
                    <img src={profilePic} alt="avatar" className="content-avatar" />
                    <div className="content-data">
                        <p className="content-author">{`${firstName}`}</p>
                        <p className="content-date">{newDate}</p>
                    </div>
                </div>
            </div>   
    </div>        
  )
}

export default Post
