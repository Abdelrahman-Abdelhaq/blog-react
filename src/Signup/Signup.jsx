import { useState } from "react";
import signup from "../assets/signup.svg";
import { Link } from "react-router";
import or_spacer from "../assets/or_spacer.svg";
import { signupStore } from "../States/SignupStore";
import SignupS from "./SignupS";

const Signup = () => {
  const isPass = signupStore((state) => state.isPass);
  const setIsPass = signupStore((state) => state.setIsPass);
  const sUName = signupStore((state) => state.sUName);
  const setSUName = signupStore((state) => state.setSUName);
  const sUMail = signupStore((state) => state.sUMail);
  const setSUMail = signupStore((state) => state.setSUMail);
  const sUPass = signupStore((state) => state.sUPass);
  const setSUPass = signupStore((state) => state.setSUPass);
  const status = signupStore((state) => state.status);
  const addUser = signupStore((state) => state.addUser);

  const handleSignUp = () => {
    if (sUName === "" || sUMail === "" || sUPass === "") {
      alert("Please Enter Valid Data");
      return null;
    }
    addUser(sUName, sUMail, sUPass);
    setSUName("");
    setSUMail("");
    setSUPass("");
  };

  return (
    <div className="signup-desktop-main-div">
      <div className="signup-dektop-left-div">
        <img src={signup} alt="sign-up-pic" className="signup-desktop-pic" />
      </div>
      <div className="signup-desktop-right-div">
        {status ? (
          <SignupS />
        ) : (
          <>
            <div className="signup-desktop-title-div">
              <p className="signup-desktop-title-p">
                Join us <br />
                Now!!
              </p>
              <p className="signup-desktop-request-p">
                Let's Create your account
              </p>
            </div>
            <div className="signup-desktop-name-div">
              <p className="signup-desktop-name-p">Full Name</p>
              <input
                type="text"
                className="signup-desktop-name-input"
                placeholder="enter your name"
                value={sUName}
                onChange={(e) => {
                  setSUName(e.target.value);
                }}
              />
            </div>
            <div className="signup-desktop-email-div">
              <p className="signup-desktop-email-p">Email</p>
              <input
                type="email"
                className="signup-desktop-email-input"
                placeholder="admin@gmail.com"
                value={sUMail}
                onChange={(e) => {
                  setSUMail(e.target.value);
                }}
              />
            </div>
            <div className="signup-desktop-password-div">
              <p className="signup-desktop-password-p">Password</p>
              <input
                type={isPass}
                className="signup-desktop-password-input"
                placeholder="enter your password"
                value={sUPass}
                onChange={(e) => {
                  setSUPass(e.target.value);
                }}
              />
              <button
                className="signup-desktop-password-btn"
                onClick={() => {
                  if (isPass === "password") setIsPass("text");
                  if (isPass === "text") setIsPass("password");
                }}
              ></button>
            </div>
            <div className="signup-desktop-signup-div">
              <button
                className="signup-desktop-signup-btn"
                onClick={handleSignUp}
              >
                Sign up
              </button>
            </div>
            <div className="signup-desktop-or-div">
              <img src={or_spacer} alt="spacer" />
              <p className="signup-desktop-or-p">OR</p>
              <img src={or_spacer} alt="spacer" />
            </div>
            <div className="signup-desktop-google-div">
              <button className="signup-google-logo-btn"></button>
              <button className="signup-desktop-google-btn">
                Continue with Google
              </button>
            </div>
            <div className="signup-desktop-signin-div">
              <p className="signup-desktop-signin-p">
                Already have an account!?
              </p>
              <Link to={"/"}>
                <button className="signup-desktop-signin-btn">Sign-in</button>
              </Link>
            </div>
          </>
        )}
      </div>{" "}
    </div>
  );
};

export default Signup;
