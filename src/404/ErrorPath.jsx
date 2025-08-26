import React from 'react'
import { Link } from 'react-router'
import "./ErrorPath.css"
import err from "../assets/error.svg"

const ErrorPath = () => {
  return (
    <div className='error-main-div'>
      <div className='error-border-div'>
        <img src={err} alt="error" className='error-pic'/>
        <p className='error-p'>Error <span className='red'>404</span>, Page Not Found </p>
        <Link className='no-underline' to={"/"}><button className='error-btn'>Login Page</button></Link>
      </div>
    </div>
  )
}

export default ErrorPath
