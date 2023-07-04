import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAuth from './useAuth'
import { useNavigate } from 'react-router-dom'

export default function useMyAppoinments() {
    const navigate=useNavigate()
  const {user,loading}=useAuth()
  const token=localStorage.getItem('access-token')

    const{refetch,data:myappoinments=[]}= useQuery({
        queryKey: ['appoinments'],
        enabled: !loading,
        queryFn: async () => {
          const res = await fetch(`https://cleaning-service-server-delta.vercel.app/appoinments?email=${user?.email}`,{
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


  return [refetch,myappoinments]
}
