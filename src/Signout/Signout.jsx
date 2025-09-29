import "./Signout.css";
import LogoutIcon from "../assets/logout.svg?react";
import { authStore } from "../States/AuthStore";
import { useNavigate } from "react-router";
import { profileStore } from "../States/ProfileStore";
import { axiosClient } from "../API/API";

const Signout = () => {
  const logout = authStore((state) => state.clearAuth);
  const navigate = useNavigate();
  const setIsInfo = profileStore((state) => state.setIsInfo);
  const setIsEdit = profileStore((state) => state.setIsEdit);
  const handleClick = () => {
    logout();
    console.log("logged out");
    axiosClient.defaults.headers.common["Authorization"] = "";
    navigate("/");
    setIsInfo(false);
    setIsEdit(false);
  };
  return (
    <LogoutIcon className="logout-icon" onClick={handleClick}></LogoutIcon>
  );
};

export default Signout;
