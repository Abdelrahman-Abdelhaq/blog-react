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
import { searchStore } from "../States/SearchStore.js";
import { sliceStore } from "../States/SliceStore.js";
const Blog = () => {
  const error = postsStore((state) => state.error);
  const loading = postsStore((state) => state.loading);
  const posts = postsStore((state) => state.posts);
  const uniquePosts = Array.from(new Set(posts.map(JSON.stringify))).map(
    JSON.parse
  );
  const search = searchStore((state) => state.search);
  const unifiedSearch = search.toLowerCase();
  const filteredPosts = uniquePosts.filter((p) =>
    p.post_title.toLowerCase().includes(unifiedSearch)
  );
  const fetchPosts = postsStore((state) => state.fetchPosts);
  const limit = PaginationStore((state) => state.limit);
  const offset = PaginationStore((state) => state.offset);
  const isInfo = profileStore((state) => state.isInfo);
  const isEdit = profileStore((state) => state.isEdit);
  const slice = sliceStore((state) => state.slice);

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
            filteredPosts
              .slice(0, slice)
              .map((post) => <Post key={post.post_id} id={post.post_id} />)
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
