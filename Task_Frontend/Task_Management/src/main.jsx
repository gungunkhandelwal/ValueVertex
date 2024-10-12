import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignUp from './components/Auth/SignUp.jsx'
import Home from './components/Task/Home.jsx'
import AddTask from './components/Task/AddTask.jsx'

const route=createBrowserRouter([
  {path:"/",element:<App/>},
  {path:'/home',element:<Home/>},
  {path:"/signup",element:<SignUp/>},
  {path:"/add_task",element:<AddTask/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)
