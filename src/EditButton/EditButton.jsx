import React from 'react'
import "./EditButton.css"
import EditModal from '../EditModal/EditModal'
import { useState } from 'react'

const EditButton = ({setPosts,id,category,title,description}) => {
  const [isEditModal,setIsEditModal] = useState(false);
  const handleEditModal = ()=>{
    setIsEditModal(true);
    document.body.classList.add("overflowY")
  }
  return (
    <div className="edit-post-div">
        <button className="edit-post-btn" onClick={handleEditModal}></button>
        <EditModal setPosts={setPosts} 
        isEditModal={isEditModal} 
        setIsEditModal={setIsEditModal} id={id} 
        category={category} title={title} 
        description={description}/>
    </div>
  )
}

export default EditButton
