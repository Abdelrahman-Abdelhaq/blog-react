import React from 'react'
import "./Loadmore.css"
const Loadmore = ({handLoadMore,items}) => {
  if (items.length <=3) return null;
  return (
    <button className='load-more' onClick={handLoadMore}>
            <p className='load-p'>Load more</p>
    </button>
  )
}

export default Loadmore
