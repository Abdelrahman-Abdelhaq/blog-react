import React from "react";
import "./EditButton.css";
import EditModal from "../EditModal/EditModal";
import { useState } from "react";

const EditButton = ({ id }) => {
  const [isEditModal, setIsEditModal] = useState(false);
  const handleEditModal = () => {
    setIsEditModal(true);
    document.documentElement.classList.add("overflowY");
  };
  return (
    <div className="edit-post-div">
      <button className="edit-post-btn" onClick={handleEditModal}></button>
      <EditModal
        isEditModal={isEditModal}
        setIsEditModal={setIsEditModal}
        id={id}
      />
    </div>
  );
};

export default EditButton;
