import { useEffect, useState } from "react";
import signup from "../assets/signup.svg";
import { Link } from "react-router";
import or_spacer from "../assets/or_spacer.svg";
import { signupStore } from "../States/SignupStore";
import SignupS from "./SignupS";
import { regexStore } from "../States/RegexStore";
import { Navigate } from "react-router";
import { useRef } from "react";

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
  const setStatus = signupStore((state) => state.setStatus);
  const addUser = signupStore((state) => state.addUser);
  const emailRegex = regexStore((state) => state.emailRegex);
  const passRegex = regexStore((state) => state.passRegex);
  const isEF = regexStore((state) => state.isEF);
  const isPF = regexStore((state) => state.isPF);
  const setEF = regexStore((state) => state.setEF);
  const setPF = regexStore((state) => state.setPF);
  const isNR = signupStore((state) => state.isNR);
  const setNR = signupStore((state) => state.setNR);
  const isER = signupStore((state) => state.isER);
  const isPR = signupStore((state) => state.isPR);
  const setER = signupStore((state) => state.setER);
  const setPR = signupStore((state) => state.setPR);
  const clickRef = useRef();

  const handleSignUp = () => {
    if (sUName === "") {
      setNR("Please Enter your Name !");
    } else if (sUMail === "") {
      setER("Please Enter your Email !");
    } else if (sUPass === "") {
      setPR("Please Enter your Password !");
    } else if (!emailRegex.test(sUMail)) {
      setER("Please Enter valid Email !");
    } else if (!passRegex.test(sUPass)) {
      setPR("Please Enter Valid Password");
    } else {
      addUser(sUName, sUMail, sUPass);
      setSUName("");
      setSUMail("");
      setSUPass("");
    }
  };

  useEffect(() => {
    if (status === 409) {
      setNR("Username Taken !");
    }
    if (status === 200) {
      setTimeout(() => setStatus(null), 50);
    }
  }, [status]);

  return (
    <div className="signup-desktop-main-div">
      <div className="signup-dektop-left-div">
        <img src={signup} alt="sign-up-pic" className="signup-desktop-pic" />
      </div>
      <div className="signup-desktop-right-div">
        {status === 200 ? (
          <Navigate to={"/"}></Navigate>
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
              {isNR ? <p className="signup-is-error">{isNR}</p> : null}
              <p className="signup-desktop-name-p">Full Name</p>
              <input
                type="text"
                className="signup-desktop-name-input"
                placeholder="enter your name"
                value={sUName}
                onChange={(e) => {
                  setSUName(e.target.value);
                  setNR(null);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    clickRef.current.click();
                  }
                }}
              />
            </div>
            <div className="signup-desktop-email-div">
              {isER ? <p className="signup-is-error">{isER}</p> : null}
              {isEF ? (
                sUMail === "" ? null : emailRegex.test(sUMail) ? null : (
                  <div className="signup-email-regex-div">
                    <p className="signup-email-regex">
                      Valid Email Example: <br />
                      admin@gmail.com
                    </p>
                  </div>
                )
              ) : null}
              <p className="signup-desktop-email-p">Email</p>
              <input
                type="email"
                className="signup-desktop-email-input"
                placeholder="admin@gmail.com"
                value={sUMail}
                onChange={(e) => {
                  setSUMail(e.target.value);
                  setER(null);
                }}
                onFocus={() => {
                  setEF(true);
                }}
                onBlur={() => {
                  setEF(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    clickRef.current.click();
                  }
                }}
              />
            </div>
            <div className="signup-desktop-password-div">
              {isPR ? <p className="signup-is-error">{isPR}</p> : null}
              {isPF ? (
                sUPass === "" ? null : passRegex.test(sUPass) ? null : (
                  <div className="signup-email-regex-div">
                    <p className="signup-email-regex">
                      Password Should Have at Least: <br />
                      1 Uppercase Letter, <br />
                      1 Lowercase Letter, <br />
                      1 Special Character (@, $, !, %, *, ?, &) <br />
                      1 Digit, <br />
                      Password Length Should be 8 or more
                    </p>
                  </div>
                )
              ) : null}
              <p className="signup-desktop-password-p">Password</p>
              <input
                type={isPass}
                className="signup-desktop-password-input"
                placeholder="enter your password"
                value={sUPass}
                onChange={(e) => {
                  setSUPass(e.target.value);
                  setPR(null);
                }}
                onFocus={() => {
                  setPF(true);
                }}
                onBlur={() => {
                  setPF(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    clickRef.current.click();
                  }
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
                ref={clickRef}
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
              <Link
                to={"/"}
                onClick={() => {
                  setSUName("");
                  setSUMail("");
                  setSUPass("");
                }}
              >
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
