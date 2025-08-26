import React from 'react'
import { Link } from 'react-router';

const MobileList = ({closeMobileList,isMobileList}) => {
    if(isMobileList === false) return null;
  return (
    <div className="mobile-list">
        <Link className='no-underline' to={"/blog"}><p className="mobile-brand">team .</p></Link>
        <p className="mobile-product">Product</p>
        <p className="mobile-services">Services</p>
        <p className="mobile-contact">Contact Us</p>
        <p className="mobile-login">Login</p>
        <button className="close-mobile-list" onClick={closeMobileList}>Close</button>
    </div>
  )
}

export default MobileList
