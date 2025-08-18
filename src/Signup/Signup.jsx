import { useState } from "react";
import signup from "../assets/signup.svg"
import { Link } from "react-router";

const Signup = ()=>{
    const [isPassword,setIsPassword] = useState("password")
    return(
        <div className="signup-desktop-main-div">
            <div className="signup-dektop-left-div">
                <img src={signup} alt="sign-up-pic" className="signup-desktop-pic" />
            </div>
            <div className="signup-desktop-right-div">
                <div className="signup-desktop-title-div">
                    <p className="signup-desktop-title-p">Join us Now!!</p>
                    <p className="signup-desktop-request-p">Let's Create your account</p>
                </div>
                <div className="signup-desktop-name-div">
                    <p className="signup-desktop-name-p">Full Name</p>
                    <input type="text" className="signup-desktop-name-input" placeholder="enter your name"/>
                </div>
                <div className="signup-desktop-email-div">
                    <p className="signup-desktop-email-p">Email</p>
                    <input type="email" className="signup-desktop-email-input" placeholder="admin@gmail.com"/>
                </div>
                <div className="signup-desktop-password-div">
                    <p className="signup-desktop-password-p">Password</p>
                    <input type={isPassword} className="signup-desktop-password-input" placeholder="enter your password"/>
                    <button className="signup-desktop-password-btn" onClick={()=>{
                        if(isPassword ==="password") setIsPassword("text")
                        if(isPassword ==="text") setIsPassword("password")
                    }}></button>
                </div>
                <div className="signup-desktop-signup-div">
                    <button className="signup-desktop-signup-btn">Sign up</button>
                </div>
                <div className="signup-desktop-or-div">
                    <p className="signup-desktop-or-p">OR</p>
                </div>
                <div className="signup-desktop-google-div">
                    <button className="signup-desktop-google-btn">Continue with Google</button>
                </div>
                <div className="signup-desktop-signin-div">
                    <p className="signup-desktop-signin-p">Already have an account!?</p>
                    <Link to={'/'}><button className="signup-desktop-signin-btn">Sign-in</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;