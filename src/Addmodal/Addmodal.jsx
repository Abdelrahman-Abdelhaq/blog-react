import React, { useEffect, useState } from 'react'
import "./Addmodal.css"
import { addPost } from '../API/API';


const Addmodal = ({isNewPost,closeModal,setPosts}) => {
    const [categoryValue,setCategoryValue] =useState('Design');
    const [titleValue,setTitleValue] = useState('');
    const [descriptionValue,setDescriptionValue] = useState('');
    const handleSubmit = ()=>{
        addPost(categoryValue,titleValue,descriptionValue,setPosts);
        setTitleValue('')
        setDescriptionValue('')
        closeModal();
    }
    if(isNewPost === false ) return null;
  return (
    <div className='m-b-div'>
        <div className='n-p-modal'>
            <div className='n-p-t-div'>
                <p className='n-p-t-p'>Add New Post</p>
            </div>
            <div className='m-g-div'>
                <p className='m-g-p'>Category:</p>
                <select className='category-select' 
                value={categoryValue} 
                onChange={(e) => {setCategoryValue(e.target.value)}}>
                    <option value="Design">Design</option>
                    <option value="Product">Product</option>
                    <option value="Management">Management</option>
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="Customer Success">Customer Success</option>
                </select>
            </div>
            <div className='m-t-div'>
                <p className='m-t-p'>Title:</p>
              <input type="text"  className='m-t-i' placeholder='Post Title'
              value={titleValue}
              onChange={e => {setTitleValue(e.target.value)}}/>
            </div>
            <div className='m-d-div'>
                <p className='m-d-p'>Description:</p>
                <input type="text" className='m-d-i' placeholder='Post Description'
                value={descriptionValue}
                onChange={e => {setDescriptionValue(e.target.value)}}/>
            </div>
            <div className='m-text-div'>
                <p className='m-text-p'>Text:</p>
                <input type="text" className='m-text-i' placeholder='Post Text'/>
            </div>
            <div className='m-p-div'>
                <p className='m-p-p'>Picture:</p>
                <input type="file" className='m-p-i'/>
            </div>
            <div className='m-btn-div'>
                <button className='m-btn-c' onClick={closeModal}>Close</button>
            <button className='m-btn-s' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    </div>
    
  )
}

export default Addmodal
