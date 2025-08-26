import React from 'react'
import "./Loadmore.css"
const Loadmore = ({handLoadMore}) => {
  return (
    <button className='load-more' onClick={handLoadMore}>
            <p className='load-p'>Load more</p>
    </button>
  )
}

export default Loadmore
