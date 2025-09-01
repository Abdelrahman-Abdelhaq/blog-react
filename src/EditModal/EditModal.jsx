import React from 'react'
import "./EditModal.css"

const EditModal = ({isEditModal}) => {
    if (isEditModal === false) return null;
  return (
    <div className='edit-modal-background'>
      <div className='edit-modal'>
            <p className='edit-modal-title-p'>Edit Post</p>
            <select defaultValue={"Design"} className='edit-modal-category'>
                <option value="Design">Design</option>
                <option value="Design">Design</option>
                <option value="Design">Design</option>
                <option value="Design">Design</option>
                <option value="Design">Design</option>
            </select>
            <input type="text" className='edit-modal-title' />
            <input type="text" className='edit-modal-description' />
      </div>
    </div>
  )
}

export default EditModal
