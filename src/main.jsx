import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/Signup.css'
import "./styles/Login.css"
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from "./componenets/Login.jsx"
import Signup from './componenets/Signup.jsx'
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
