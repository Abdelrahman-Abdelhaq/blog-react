import { Link } from "react-router";
import { picStore } from "../States/PicStore";
import "./SignupS.css";
import { signupStore } from "../States/SignupStore";

const SignupS = () => {
  const signups = picStore((state) => state.signups);
  const setStatus = signupStore((state) => state.setStatus);

  return (
    <div className="signup-success-main-div">
      <div className="signup-success-pic-div">
        <img src={signups} alt="succcess" className="signup-success-pic" />
      </div>
      <div className="signup-success-p-div">
        <p className="signup-success-p">Signed Up Successfully!</p>
        <Link
          onClick={() => {
            setStatus(null);
          }}
          className="no-link"
          to={"/"}
        >
          Go to Login Page!
        </Link>
      </div>
    </div>
  );
};

export default SignupS;
