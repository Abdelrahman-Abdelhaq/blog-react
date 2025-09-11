import "./Blog.css";
import Post from "../Post/Post";
import Headers from "../Headers/Headers.jsx";
import { Spacer_1, Spacer_2, Spacer_3, Spacer_4 } from "../Spacer/Spacer.jsx";
import Footer from "../Footer/Footer.jsx";
import Addmodal from "../Addmodal/Addmodal.jsx";
import { useEffect } from "react";
import ProfilePic from "../ProfilePic/ProfilePic.jsx";
import { PaginationStore } from "../States/PaginationStore.js";
import { postsStore } from "../States/PostsStore";
import ProfileModal from "../ProfileModal/ProfileModal.jsx";
import { profileStore } from "../States/ProfileStore.js";
import Loading from "../Loading/Loading.jsx";
const Blog = () => {
  const error = postsStore((state) => state.error);
  const loading = postsStore((state) => state.loading);
  const posts = postsStore((state) => state.posts);
  const fetchPosts = postsStore((state) => state.fetchPosts);
  const limit = PaginationStore((state) => state.limit);
  const offset = PaginationStore((state) => state.offset);
  const isInfo = profileStore((state) => state.isInfo);
  const isEdit = profileStore((state) => state.isEdit);

  useEffect(() => {
    fetchPosts(offset, limit);
  }, [offset, limit, fetchPosts]);
  return (
    <div className="background">
      <ProfilePic />
      <Spacer_1 />
      <Headers />
      {isInfo || isEdit ? <ProfileModal></ProfileModal> : null}
      <Spacer_2 />
      <Addmodal />
      <div className="main-div">
        <div className="posts">
          {loading ? (
            <Loading></Loading>
          ) : error ? (
            error
          ) : (
            posts.map((post) => <Post key={post.post_id} id={post.post_id} />)
          )}
        </div>
      </div>
      <Spacer_3 />
      <Footer />
      <Spacer_4 />
    </div>
  );
};

export default Blog;
