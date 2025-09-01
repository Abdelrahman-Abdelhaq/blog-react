import React from 'react'
import "./EditButton.css"
import EditModal from '../EditModal/EditModal'
import { useState } from 'react'

const EditButton = () => {
  const [isEditModal,setIsEditModal] = useState(false);
  return (
    <div className="edit-post-div">
        <button className="edit-post-btn" onClick={()=>{alert("Please Leave me Alone, not Functional Yet :,(")}}></button>
        <EditModal isEditModal={isEditModal}/>
    </div>
  )
}

export default EditButton
