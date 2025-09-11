import "./Addmodal.css";
import { newPostStore } from "../States/NewPostStore";
import { modalStore } from "../States/ModalStore";
import { postsStore } from "../States/PostsStore";

const Addmodal = () => {
  const isActive = newPostStore((state) => state.isActive);
  const closeModal = newPostStore((state) => state.deactivate);
  const category = modalStore((state) => state.category);
  const title = modalStore((state) => state.title);
  const desc = modalStore((state) => state.desc);
  const setCategory = modalStore((state) => state.setCategory);
  const setTitle = modalStore((state) => state.setTitle);
  const setDesc = modalStore((state) => state.setDesc);
  const addPost = postsStore((state) => state.addPost);
  const handleSubmit = () => {
    addPost(category, title, desc);
    setCategory("Design");
    setTitle("Post Title");
    setDesc("Post Description");
    handleClose();
  };
  const handleClose = () => {
    setCategory("Design");
    setTitle("Post Title");
    setDesc("Post Description");
    closeModal();
    document.documentElement.classList.remove("overflowY");
  };
  if (isActive === false) return null;
  return (
    <div className="m-b-div">
      <div className="n-p-modal">
        <div className="n-p-t-div">
          <p className="n-p-t-p">Add New Post</p>
        </div>
        <div className="m-g-div">
          <p className="m-g-p">Category:</p>
          <select
            className="category-select"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="Design">Design</option>
            <option value="Product">Product</option>
            <option value="Management">Management</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Customer Success">Customer Success</option>
          </select>
        </div>
        <div className="m-t-div">
          <p className="m-t-p">Title:</p>
          <input
            type="text"
            className="m-t-i"
            placeholder="Post Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="m-d-div">
          <p className="m-d-p">Description:</p>
          <input
            type="text"
            className="m-d-i"
            placeholder="Post Description"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <div className="m-text-div">
          <p className="m-text-p">Text:</p>
          <input type="text" className="m-text-i" placeholder="Post Text" />
        </div>
        <div className="m-p-div">
          <p className="m-p-p">Picture:</p>
          <input type="file" className="m-p-i" />
        </div>
        <div className="m-btn-div">
          <button className="m-btn-c" onClick={handleClose}>
            Close
          </button>
          <button className="m-btn-s" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addmodal;
