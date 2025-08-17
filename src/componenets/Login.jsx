import { useState } from "react";
import signin from "../assets/signin.svg"
import { Link } from "react-router";

const Login = ()=> {
    const [isPassword,setIsPassword] = useState("password");
    return (
        
                <div className="desktop-login-main-container">
                <div className="login-left-subcontainer">
                    <img src={signin} alt="Phono Prototype" className="login-phone-pic" />
                </div>
                <div className="login-right-subcontainer">
                    <div className="login-title-div">
                        <p className="login-title">Welcome Back</p>
                        <p className="login-title-mobile">Hey, <br/>Welcome Back</p>
                        <p className="login-request">Please login your account</p>
                    </div>
                    <div className="login-email-div">
                        <p className="login-email-p">Email</p>
                        <input type="email"  className="login-email-input" placeholder="admin@gmail.com"/>
                    </div>
                    <div className="login-password-div">
                        <p className="login-password-p">Password</p>
                        <input type={isPassword}  className="login-password-input" placeholder="enter your password" />
                        <button className="login-password-eye" onClick={()=>{
                            if(isPassword ==="password"){
                                setIsPassword("text")
                            }else if (isPassword === "text"){
                                setIsPassword("password")
                            }
                        }}></button>
                    </div>
                    <div className="login-forget-pass-div">
                        <button className="login-forget-btn">Forgot Password</button>
                    </div>
                    <div className="login-signin-div">
                        <button className="login-signin-btn" onClick={()=>{console.log("stop Hitting me Moron!")}}>Sign in</button>
                    </div>
                    <div className="login-or-div">
                        <p className="login-or-p">OR</p>
                    </div>
                    <div className="login-google-div">
                        <button className="login-google-btn">Continue with Google</button>
                    </div>
                    <div className="login-no-account-div">
                        <p className="login-no-account-p">Don't have an account? </p>
                        <Link to={'/signup'}><button className="login-no-account-btn">Sign-up</button></Link>
                    </div>  
                </div>
            </div>       
    );
}

export default Login;