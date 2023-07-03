import React from 'react'

import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';


export default function AdminRoute({children}) {
const{user,loading}=useAuth()
const [isAdmin,isAdminLoading]=useAdmin()
let location = useLocation();
if(loading||isAdminLoading){
    return <h1>.....Loading</h1>
}
if(user&&isAdmin.admin){
    return children
}
  return <Navigate to='/' state={{ from: location }} replace></Navigate>
}
