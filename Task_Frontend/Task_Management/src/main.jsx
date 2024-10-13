import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignUp from './components/Auth/SignUp.jsx'
import Home from './components/Task/Home.jsx'
import AddTask from './components/Task/AddTask.jsx'
import EditTask from './components/Task/EditTask.jsx'

const route=createBrowserRouter([
  {path:"/",element:<App/>},
  {path:'/home',element:<Home/>},
  {path:"/signup",element:<SignUp/>},
  {path:"/add_task",element:<AddTask/>},
  {path:"/edit_task/:id",element:<EditTask/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)
