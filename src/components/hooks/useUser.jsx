import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAuth from './useAuth'
import { useNavigate } from 'react-router-dom'

export default function useUser() {
  const navigate=useNavigate()
    const{user}=useAuth()
    const token=localStorage.getItem('access-token')

    const{data:isUser=[],isLoading:isUserLoading}= useQuery({
        queryKey: ['user'],
        queryFn: async () => {
          const res = await fetch(`https://cleaning-service-server-delta.vercel.app/allusers/user/${user?.email}`,{
            headers:{
              authorization:`bearer ${token}`
            }
          })
          if (res.status === 401) {
  
            navigate('/')
            return Promise.reject('Unauthorized')
          }
    
          return res.json()
        },
      })


  return [isUser,isUserLoading]
}
