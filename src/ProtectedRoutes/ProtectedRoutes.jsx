import React from "react";
import { authStore } from "../States/AuthStore";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const accessToken = authStore((state) => state.accessToken);

  if (!accessToken) return <Navigate to={"/"} replace />;
  return children;
};

export default ProtectedRoutes;
