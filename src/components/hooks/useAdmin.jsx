import React from 'react'
import useAuth from './useAuth'
import { useQuery } from '@tanstack/react-query'

export default function useAdmin() {
    const{user}=useAuth()
    const token=localStorage.getItem('access-token')

    const{data:isAdmin=[],isLoading:isAdminLoading}= useQuery({
        queryKey: ['admin'],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/allusers/admin/${user?.email}`,{
            headers:{
              authorization:`bearer ${token}`
            }
          })
          return res.json()
        },
      })


  return [isAdmin,isAdminLoading]
}