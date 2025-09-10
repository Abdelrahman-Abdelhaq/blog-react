import {
  Spacer_10,
  Spacer_5,
  Spacer_6,
  Spacer_7,
  Spacer_8,
  Spacer_9,
} from "../Spacer/Spacer";
import spacer from "../assets/spacer.svg";
import post_pic from "../assets/post-pic.svg";
import { Link } from "react-router";
import "./PostPage.css";
import { useEffect, useState } from "react";
import MobileList from "../MobileList/MobileList";
import { picStore } from "../States/PicStore";
import { userStore } from "../States/UserStore";
const PostPage = () => {
  const pic = picStore((state) => state.pic);
  const [mobileList, setMobileList] = useState(false);
  const username = userStore((state) => state.firstName);
  const openList = () => {
    setMobileList(true);
  };
  const closeList = () => {
    setMobileList(false);
  };
  useEffect(() => {
    if (mobileList === true) {
      document.documentElement.classList.add("overflowY");
    } else {
      document.documentElement.classList.remove("overflowY");
    }
    return () => {
      document.documentElement.classList.remove("overflowY");
    };
  }, [mobileList]);
  return (
    <div className="post-page-main-div" id="post_page">
      <button className="open-mobile-list" onClick={openList}></button>
      <MobileList mobileList={mobileList} closeMobileList={closeList} />
      <div className="post-page-header-div">
        <Link to={"/blog"} className="no-underline">
          <p className="post-page-brand">team.</p>
        </Link>
        <div className="post-page-header-elements">
          <div className="post-page-list-div">
            <ul className="post-page-header-list">
              <li>Products</li>
              <li>Services</li>
              <li>Contact</li>
              <li>Log in</li>
            </ul>
          </div>
          <div className="post-page-header-btn-div">
            <button className="post-page-header-btn">Get Access</button>
          </div>
        </div>
      </div>
      <Spacer_5 />
      <div className="post-page-title">
        <div className="post-page-title-p-div">
          <p className="post-page-title-p">
            10 Secrets for managing a remote team{" "}
          </p>
        </div>
        <div className="post-page-title-info">
          <img src={pic} alt="avatar" className="post-page-title-avatar" />
          <p className="post-page-author-name">{username}</p>
          <img src={spacer} alt="spacer" className="post-page-info-spacer" />
          <p className="post-page-info-date">2nd January,2022</p>
        </div>
      </div>
      <Spacer_6 />
      <div className="post-page-pic-div">
        <img src={post_pic} alt="post-pic" className="post-page-pic" />
      </div>
      <Spacer_6 />
      <div className="post-page-post-text-div">
        <p className="post-page-post-text">
          If you’re thinking of starting a blog of your own, but just don’t have
          a clue on what to blog about, then fear not! <br />
          <br />
          In this article, I have included a whole load of blog examples from a
          wide variety of different niches, all run on different blogging
          platforms like WordPress, Joomla! and Drupal. <br /> <br />
          Since the beginning of the internet, millions and millions and
          millions of blogs have been created. Many have died due to lost
          interest or their owners giving up on the idea, while others have
          thrived and continue to grow, making money and earning their owners a
          steady income. It’s a constant evolution of content that keeps people
          coming back for more, especially if these blogs contact highly
          resourceful material that people find useful and interesting. <br />{" "}
          <br />
          Each example listed in this blog post are all different in some way
          and all bring something unique to their readers & subscribers. I want
          to show you what is possible and how you can take inspiration from
          them and create an awesome blog of your own. <br /> <br />
          Some of these blogs make over $100k a month, others are just a hobby
          for their owners, but all have the same purpose at their core… the
          love of writing and sharing information. <br />
          Some of these blogs make over $100k a month, others are just a hobby
          for their owners, but all have the same purpose at their core… the
          love of writing and <br /> <br />
          Some of these blogs make over $100k a month, others are just a hobby
          for their owners, but all have the same purpose at their core… the
          love of writing and sharing information. <br />
          Some of these blogs make over $100k a month, others are just a hobby
          for their owners, but all have the same purpose at their core… the
          love of writing and sharing information.
        </p>
      </div>
      <Spacer_7 />
      <div className="post-page-post-footer-div">
        <div className="post-page-footer-pic-div">
          <img src={pic} alt="avatar" className="post-page-footer-pic" />
        </div>
        <div className="post-page-footer-info">
          <p className="post-page-footer-written">Written by</p>
          <p className="post-page-footer-author">{username}</p>
          <p className="post-page-footer-job">CEO Team App</p>
        </div>
      </div>
      <Spacer_8 />
      <hr className="footer-spacer" />
      <Spacer_9 />
      <div className="comment-section">
        <div className="comment-invitation-div">
          <p className="comment-invitation">Join the conversation</p>
        </div>
        <div className="new-comment-div">
          <img src={pic} alt="avatar" className="new-comment-pic" />
          <input
            type="text"
            placeholder="Comments"
            className="new-comment-input"
          />
        </div>
        <div className="comment"></div>
      </div>
      <Spacer_10 />
    </div>
  );
};

export default PostPage;
