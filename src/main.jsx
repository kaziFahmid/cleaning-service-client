import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import AuthProvider from './components/AuthProvider/AuthProvider';
import axios from 'axios';
import Dashboard from './components/Dashboard/Dashboard';
import ManageUsers from './components/ManageUsers/ManageUsers';
import UsersBookings from './components/UsersBookings/UsersBookings';
import StaffManagement from './components/StaffManagement/StaffManagement';

import MyAppoinments from './components/MyAppoinments/MyAppoinments';
import PaymentHistory from './components/PaymentHistory/PaymentHistory';
import AllStaff from './components/AllStaff/AllStaff';
import Payment from './components/Payment/Payment';
import AdminRoute from './components/PrivateRoute/AdminRoute';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserRoute from './components/PrivateRoute/userRoute';

axios.defaults.baseURL=`http://localhost:5000/`
axios.interceptors.request.use((req)=>{return req})
axios.interceptors.response.use((res)=>{return res.data})

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main/>,
    children:[
        {
          path: "/",
          element:<Home/>,
        },
        {
          path: "/services",
          element:<Services/>,
  
        },

        {
          path: "/allstaff",
          element:<AllStaff/>,
  
        },
      
        {
          path: "/servicedetails/:id",
          element:<ServiceDetails/>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
          
  
        },

    ]
  },
  {
    path: "/login",
    element:<Login/>,

  },
  {
    path: "/signup",
    element:<Signup/>,

  },

  {
    path:"/dashboard",
    element:<PrivateRoute><Dashboard/></PrivateRoute>,
   children:[
  
    {
      
      path:'/dashboard/manageusers',
      element:<AdminRoute><ManageUsers/></AdminRoute>,
   
    },
    {
      
      path:'/dashboard/usersbookings',
      element:<AdminRoute><UsersBookings/></AdminRoute>,
   
    },
    {
      
      path:'/dashboard/staffmanagement',
      element:<AdminRoute><StaffManagement/></AdminRoute>,
   
    },

   

    {
      
      path:'/dashboard/myappoinments',
      element:<UserRoute><MyAppoinments/></UserRoute>
   
    },
    {
      
      path:'/dashboard/paymenthistory',
      element: <UserRoute><PaymentHistory/></UserRoute>

    },

    {
      
      path:'/dashboard/payment/:id',
      element:<UserRoute><Payment/></UserRoute>,
      loader: ({params})=> fetch(`http://localhost:5000/appoinments/${params.id}`)
   
    },
   ]
  }

]);
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
<AuthProvider> <RouterProvider router={router} /></AuthProvider>
    </QueryClientProvider>

  </React.StrictMode>,
)
