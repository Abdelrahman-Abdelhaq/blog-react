import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Signup/Signup.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login/Login.jsx";
import Signup from "./Signup/Signup.jsx";
import Blog from "./Blog/Blog.jsx";
import PostPage from "./PostPage/PostPage.jsx";
import ErrorPath from "./404/ErrorPath.jsx";
import { authStore } from "./States/AuthStore.js";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes.jsx";

authStore.getState().loadAuthFromStorage();
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/blog",
    element: (
      <ProtectedRoutes>
        <Blog />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/postpage/:id",
    element: (
      <ProtectedRoutes>
        <PostPage />
      </ProtectedRoutes>
    ),
  },
  {
    path: "*",
    element: <ErrorPath />,
  },
]);
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={Router} />
  // </StrictMode>,
);
