import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth';

import useUser from '../hooks/useUser';
export default function UserRoute({children}) {
    const{user,loading}=useAuth()
const [isUser,isUserLoading]=useUser()
    let location = useLocation();
    if(loading||isUserLoading){
        return <h1>.....Loading</h1>
    }
    if(user&& isUser.user){
        return children
    }
      return <Navigate to='/' state={{ from: location }} replace></Navigate>
}
