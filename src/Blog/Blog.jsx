import "./Blog.css";
import Post from "../Post/Post";
import Headers from "../Headers/Headers.jsx";
import { Spacer_1, Spacer_2, Spacer_3, Spacer_4 } from "../Spacer/Spacer.jsx";
import Footer from "../Footer/Footer.jsx";
import Addmodal from "../Addmodal/Addmodal.jsx";
import { useEffect, useState } from "react";
import ProfilePic from "../ProfilePic/ProfilePic.jsx";
import { fetchPost } from "../API/API.js";
import { PaginationStore } from "../States/PaginationStore.js";
import { postsStore } from "../States/PostsStore";
import ProfileModal from "../ProfileModal/ProfileModal.jsx";
import { profileStore } from "../States/ProfileStore.js";
const Blog = () => {
  const [posts, setPosts] = useState([]);
  const { limit, offset } = PaginationStore();
  const { pasta, setPasta } = postsStore();
  const { isInfo, isEdit } = profileStore();

  useEffect(() => {
    fetchPost(setPosts, offset, limit, pasta, setPasta);
    console.log(posts);
  }, [offset]);
  return (
    <div className="background">
      <ProfilePic />
      <Spacer_1></Spacer_1>
      <Headers />
      {isInfo || isEdit ? <ProfileModal></ProfileModal> : null}
      <Spacer_2 />
      <Addmodal setPosts={setPosts} />
      <div className="main-div">
        <div className="posts">
          {posts.map((post) => (
            <Post
              key={`${post.post_id}-${post.post_title}-${post.post_description}`}
              post={post}
              setPosts={setPosts}
            />
          ))}
        </div>
      </div>
      <Spacer_3 />
      <Footer />
      <Spacer_4 />
    </div>
  );
};

export default Blog;
