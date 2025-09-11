import { useState } from "react";
import "./EditModal.css";
import { PaginationStore } from "../States/PaginationStore.js";
import { modalStore } from "../States/ModalStore.js";
import { postsStore } from "../States/PostsStore.js";

const EditModal = ({ isEditModal, setIsEditModal, id }) => {
  const posts = postsStore((state) => state.posts);
  const post = posts.find((p) => p.post_id === id);
  const { resetLimit, resetOffset } = PaginationStore();
  const eCategory = modalStore((state) => state.eCategory);
  const eTitle = modalStore((state) => state.eTitle);
  const eDesc = modalStore((state) => state.eDesc);
  const setECategory = modalStore((state) => state.setECategory);
  const setETitle = modalStore((state) => state.setETitle);
  const setEDesc = modalStore((state) => state.setEDesc);
  const updatePost = postsStore((state) => state.updatePost);
  const closeEditModal = () => {
    setIsEditModal(false);
    setECategory("");
    setETitle("");
    setEDesc("");
    document.documentElement.classList.remove("overflowY");
  };
  const handleEditSubmit = () => {
    updatePost(
      eCategory === "" ? post.post_category : eCategory,
      eTitle === "" ? post.post_title : eTitle,
      eDesc === "" ? post.post_description : eDesc,
      id
    );
    setIsEditModal(false);
    document.documentElement.classList.remove("overflowY");
  };
  if (isEditModal === false) return null;
  return (
    <div className="edit-modal-background">
      <div className="edit-modal">
        <p className="edit-modal-main-title">Edit Post</p>
        <p className="edit-modal-category-p">New Category:</p>
        <select
          className="edit-modal-category"
          value={eCategory}
          onChange={(e) => setECategory(e.target.value)}
        >
          <option value="Design">Design</option>
          <option value="Product">Product</option>
          <option value="Management">Management</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Customer Success">Customer Success</option>
        </select>
        <p className="edit-modal-title-p">New Title:</p>
        <input
          type="text"
          className="edit-modal-title"
          placeholder={post.post_title}
          value={eTitle}
          onChange={(e) => setETitle(e.target.value)}
        />
        <p className="edit-modal-description-p">New Description:</p>
        <input
          type="text"
          className="edit-modal-description"
          placeholder={post.post_description}
          value={eDesc}
          onChange={(e) => setEDesc(e.target.value)}
        />
        <button onClick={closeEditModal} className="edit-modal-close">
          Close
        </button>
        <button className="edit-modal-submit" onClick={handleEditSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default EditModal;
