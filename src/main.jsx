import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Signup/Signup.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from "./Login/Login.jsx"
import Signup from './Signup/Signup.jsx'
const Router = createBrowserRouter([
    {
      path:'/',
      element: <Login/>,
      errorElement: <Login/>
    },
    {
      path:'/signup',
      element: <Signup/>
    },
    {
      path:"*",
      element: <Login/>
    }
  ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={Router}/>
  </StrictMode>,
)
