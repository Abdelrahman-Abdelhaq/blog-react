import React from 'react'
import "./Addpost.css"
import { newPostStore } from '../States/NewPostStore'

const Addpost = () => {
  const activateNewPostModal = newPostStore((state) => state.activate)
  const handleOpenModal = () => {
    activateNewPostModal()
    document.body.classList.add("overflowY")
  }
  return (
        <button className='add-post' onClick={handleOpenModal}></button>
  )
}

export default Addpost
