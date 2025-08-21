import React from 'react'
import "./Footer.css"
import Loadmore from '../Loadmore/Loadmore.jsx'
import Addpost from '../Addpost/Addpost.jsx'

const Footer = ({newpost}) => {
  return (
    <div className='btn-container'>
        <Loadmore/>
        <Addpost newpost={newpost}/>
    </div>
  )
}

export default Footer
