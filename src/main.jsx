import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Main';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Registar/Register';
import AuthProvider from './Provider/AuthProvider';
import DashBoard from './Component/DashBoard/DashBoard';
import AddFeatures from './Component/DashBoard/AdminRoute/AddFeatures';
import ManageUsers from './Component/DashBoard/AdminRoute/ManageUsers';
import AddDoctors from './Component/DashBoard/AdminRoute/AddDoctors';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/register',
        element : <Register></Register>,
      },
      
    ]},
    
    {
      path : "/dashboard",
      element : <DashBoard></DashBoard>,
      children : [
        {
          path : 'addFeatures',
          element : <AddFeatures></AddFeatures>
        },
        {
          path : 'manageUsers',
          element : <ManageUsers></ManageUsers>
        },
        {
          path : 'addDoctor',
          element : <AddDoctors></AddDoctors>
        }
      ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
