import React from 'react'

const MobileList = ({closeMobileList,isMobileList}) => {
    if(isMobileList === false) return null;
  return (
    <div className="mobile-list">
        <p className="mobile-brand">team .</p>
        <p className="mobile-product">Product</p>
        <p className="mobile-services">Services</p>
        <p className="mobile-contact">Contact Us</p>
        <p className="mobile-login">Login</p>
        <button className="close-mobile-list" onClick={closeMobileList}>Close</button>
    </div>
  )
}

export default MobileList
