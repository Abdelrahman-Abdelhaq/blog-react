import signin from "../assets/signin.svg";
import { Link, useNavigate } from "react-router";
import "./Login.css";
import or_spacer from "../assets/or_spacer.svg";
import { loginStore } from "../States/LoginStore";
import { useRef } from "react";
import { regexStore } from "../States/RegexStore";

const Login = () => {
  const isPass = loginStore((state) => state.isPass);
  const setIsPass = loginStore((state) => state.setIsPass);
  const lEmail = loginStore((state) => state.lEmail);
  const setLEmail = loginStore((state) => state.setLEmail);
  const lPassword = loginStore((state) => state.lPassword);
  const setLPassword = loginStore((state) => state.setLPassword);
  const isLogged = loginStore((state) => state.isLogged);
  const setIsLogged = loginStore((state) => state.setIsLogged);
  const userLoginAPI = loginStore((state) => state.userLoginAPI);
  const isEmailErr = loginStore((state) => state.isEmailErr);
  const isPassErr = loginStore((state) => state.isPassErr);
  const setIsEErr = loginStore((state) => state.setIsEErr);
  const setIsPErr = loginStore((state) => state.setIsPErr);
  const emailRegex = regexStore((state) => state.emailRegex);
  const passRegex = regexStore((state) => state.passRegex);
  const signInRef = useRef();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (lEmail === "" && lPassword === "") {
      setIsEErr("Please Fill in Your Email!");
      setIsPErr("Please Fill in Your Password!");
    } else if (lEmail === "") {
      setIsEErr("Please Fill in Your Email!");
    } else if (lPassword === "") {
      setIsPErr("Please Fill in Your Password!");
    } else if (!emailRegex.test(lEmail)) {
      setIsEErr("Please Enter Valid Email !");
    } else if (!passRegex.test(lPassword)) {
      setIsPErr("Please Enter Valid Password !");
    } else {
      const data = await userLoginAPI(lEmail, lPassword);
      setIsLogged(null);
      setLEmail("");
      setLPassword("");
    }
  };
  return (
    <div className="desktop-login-main-container">
      <div className="login-left-subcontainer">
        <img src={signin} alt="Phone Prototype" className="login-phone-pic" />
      </div>
      {isLogged ? (
        navigate("/blog")
      ) : (
        <div className="login-right-subcontainer">
          <div className="login-title-div">
            <p className="login-title">Welcome Back</p>
            <p className="login-title-mobile">
              Hey,
              <br />
              Welcome Back
            </p>
            <p className="login-request">Please login your account</p>
          </div>
          <div className="login-email-div">
            {isEmailErr ? <p className="login-is-error">{isEmailErr}</p> : null}
            <p className="login-email-p">Email</p>
            <input
              type="email"
              className="login-email-input"
              placeholder="admin@gmail.com"
              value={lEmail}
              onChange={(e) => {
                setLEmail(e.target.value);
                setIsEErr(null);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  signInRef.current.click();
                }
              }}
            />
          </div>
          <div className="login-password-div">
            {isPassErr ? <p className="login-is-error">{isPassErr}</p> : null}
            <p className="login-password-p">Password</p>
            <input
              type={isPass}
              className="login-password-input"
              placeholder="enter your password"
              value={lPassword}
              onChange={(e) => {
                setLPassword(e.target.value);
                setIsPErr(null);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  signInRef.current.click();
                }
              }}
            />
            <button
              className="login-password-eye"
              onClick={() => {
                if (isPass === "password") {
                  setIsPass("text");
                } else if (isPass === "text") {
                  setIsPass("password");
                }
              }}
            ></button>
          </div>
          <div className="login-forget-pass-div">
            <button className="login-forget-btn">Forgot Password</button>
          </div>
          <div className="login-signin-div">
            <button
              className="login-signin-btn"
              onClick={handleLogin}
              ref={signInRef}
            >
              Sign in
            </button>
          </div>
          <div className="login-or-div">
            <img src={or_spacer} alt="spacer" className="or-spacer-1" />
            <p className="login-or-p">OR</p>
            <img src={or_spacer} alt="spacer" className="or-spacer-2" />
          </div>
          <div className="login-google-div">
            <button className="login-google-logo-btn"></button>
            <button className="login-google-btn">Continue with Google</button>
          </div>
          <div className="login-no-account-div">
            <p className="login-no-account-p">Don't have an account? </p>
            <Link
              to={"/signup"}
              onClick={() => {
                setLEmail("");
                setLPassword("");
                setIsLogged(null);
              }}
            >
              <button className="login-no-account-btn">Sign-up</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
