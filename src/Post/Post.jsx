import "./Post.css";
import image from "../assets/post-image.svg";
import { Link } from "react-router";
import moment from "moment";
import EditButton from "../EditButton/EditButton";
import { picStore } from "../States/PicStore";
import { userStore } from "../States/UserStore";
import { postsStore } from "../States/PostsStore";

const Post = ({ id }) => {
  const posts = postsStore((state) => state.posts);
  const post = posts.find((p) => p.post_id === id);
  const firstName = userStore((state) => state.firstName);
  const profilePic = picStore((state) => state.pic);
  const newDate = moment(post.post_date).format("DD-MMM-YYYY");
  const deletePost = postsStore((state) => state.deletePost);
  const handleDelete = () => {
    deletePost(id);
  };
  return (
    <div className="post">
      <div className="content">
        <EditButton id={post.post_id} />
        <div className="delete-post-div">
          <button className="delete-post-btn" onClick={handleDelete}></button>
        </div>
        <img src={image} alt="image " className="content-img" />
        <p className="content-category">{post.post_category}</p>
        <Link to={`/postpage/${id}`} className="no-decoration">
          <p className="content-title">{post.post_title}</p>
        </Link>
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
  );
};

export default Post;
