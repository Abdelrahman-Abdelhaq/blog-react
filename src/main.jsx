import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Signup/Signup.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login/Login.jsx";
import Signup from "./Signup/Signup.jsx";
import Blog from "./Blog/Blog.jsx";
import PostPage from "./PostPage/PostPage.jsx";
import ErrorPath from "./404/ErrorPath.jsx";
import { Task } from "./Task/Task.jsx";
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
    element: <Blog />,
  },
  { path: "/postpage/:id", element: <PostPage /> },
  {
    path: "*",
    element: <ErrorPath />,
    // <Task></Task>,
  },
]);
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={Router} />
  // </StrictMode>,
);
