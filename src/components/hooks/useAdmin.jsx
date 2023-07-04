import React from 'react'
import useAuth from './useAuth'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

export default function useAdmin() {
  const navigate=useNavigate()
    const{user}=useAuth()
    const token=localStorage.getItem('access-token')

    const{data:isAdmin=[],isLoading:isAdminLoading}= useQuery({
        queryKey: ['admin'],
        queryFn: async () => {
          const res = await fetch(`https://cleaning-service-server-delta.vercel.app/allusers/admin/${user?.email}`,{
            headers:{
              authorization:`bearer ${token}`
            }
          })
          if (res.status === 401) {
  
            navigate('/login')
            return Promise.reject('Unauthorized')
          }
    
          return res.json()
 
        },
      })


  return [isAdmin,isAdminLoading]
}
