import React from 'react'
import "./Footer.css"
import Loadmore from '../Loadmore/Loadmore.jsx'
import Addpost from '../Addpost/Addpost.jsx'

const Footer = ({handleLoadMore,posts}) => {
  
  return (
    <div className='btn-container'>
        <Loadmore items={posts} handLoadMore={handleLoadMore}/>
        <Addpost/>
    </div>
  )
}

export default Footer
