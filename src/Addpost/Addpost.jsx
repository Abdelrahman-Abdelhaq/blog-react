import React from 'react'
import "./Addpost.css"

const Addpost = ({newpost}) => {
  return (
        <button className='add-post' onClick={newpost}></button>
  )
}

export default Addpost
