import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAuth from './useAuth'

export default function useUser() {
    const{user}=useAuth()
    const token=localStorage.getItem('access-token')

    const{data:isUser=[],isLoading:isUserLoading}= useQuery({
        queryKey: ['user'],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/allusers/user/${user?.email}`,{
            headers:{
              authorization:`bearer ${token}`
            }
          })
          return res.json()
        },
      })


  return [isUser,isUserLoading]
}