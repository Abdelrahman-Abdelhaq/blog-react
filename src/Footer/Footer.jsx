import React from 'react'
import "./Footer.css"
import Loadmore from '../Loadmore/Loadmore.jsx'
import Addpost from '../Addpost/Addpost.jsx'

const Footer = ({newpost,handleLoadMore}) => {
  return (
    <div className='btn-container'>
        <Loadmore handLoadMore={handleLoadMore}/>
        <Addpost newpost={newpost}/>
    </div>
  )
}

export default Footer
