import { useState } from "react";
import "./EditModal.css";
import { PaginationStore } from "../States/PaginationStore.js";

const EditModal = ({
  isEditModal,
  setIsEditModal,
  id,
  category,
  title,
  description,
}) => {
  const { resetLimit, resetOffset } = PaginationStore();
  const [editModalCategory, setEditModalCategory] = useState(category);
  const [editModalTitle, setEditModalTitle] = useState(title);
  const [editModalDescription, setEditModalDescription] = useState(description);
  const closeEditModal = () => {
    setIsEditModal(false);
    document.body.classList.remove("overflowY");
  };
  const handleEditSubmit = () => {
    editPost(editModalCategory, editModalTitle, editModalDescription, id);
    resetLimit();
    resetOffset();
    setIsEditModal(false);
    document.body.classList.remove("overflowY");
  };
  if (isEditModal === false) return null;
  return (
    <div className="edit-modal-background">
      <div className="edit-modal">
        <p className="edit-modal-main-title">Edit Post</p>
        <p className="edit-modal-category-p">New Category:</p>
        <select
          className="edit-modal-category"
          value={editModalCategory}
          onChange={(e) => setEditModalCategory(e.target.value)}
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
          placeholder="Enter New Title"
          value={editModalTitle}
          onChange={(e) => setEditModalTitle(e.target.value)}
        />
        <p className="edit-modal-description-p">New Description:</p>
        <input
          type="text"
          className="edit-modal-description"
          placeholder="Enter New Description"
          value={editModalDescription}
          onChange={(e) => setEditModalDescription(e.target.value)}
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
