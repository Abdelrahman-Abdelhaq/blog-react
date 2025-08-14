import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from "./componenets/Login.jsx"
import Signup from './componenets/Signup.jsx'
const Router = createBrowserRouter([
    {
      path:'/',
      element: <Login/>
    },
    {
      path:'/signup',
      element: <Signup/>
    }
  ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={Router}/>
  </StrictMode>,
)
