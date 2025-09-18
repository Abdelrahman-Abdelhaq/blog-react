import commentStore from "../States/CommentStore";
import { picStore } from "../States/PicStore";
import "./Comment.css";

const Comment = ({ comment }) => {
  const pic = picStore((state) => state.pic);
  const upvote = picStore((state) => state.upvote);
  return (
    <div className="added-comment-div">
      <div className="added-comment-pic-div">
        <img src={pic} alt="profile-pic" className="added-comment-pic" />
      </div>
      <div className="added-comment-content-div">
        <div className="added-comment-p-div">
          <p className="added-comment-p">{comment.comment_paragraph}</p>
        </div>
        <div className="added-comment-reactions">
          <img
            src={upvote}
            alt="upvote"
            className="added-comment-upvote"
            onClick={() => {
              console.log("Moron!, Stop Clicking, No Functionaly Yet!!!");
            }}
          />
          <p className="added-comment-upvote-count">{comment.comment_likes}</p>
        </div>
      </div>
      <hr className="added-comment-hr" />
    </div>
  );
};

export default Comment;
