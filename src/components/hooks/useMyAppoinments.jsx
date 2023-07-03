import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAuth from './useAuth'

export default function useMyAppoinments() {
    
  const {user,loading}=useAuth()
  const token=localStorage.getItem('access-token')

    const{refetch,data:myappoinments=[]}= useQuery({
        queryKey: ['appoinments'],
        enabled: !loading,
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/appoinments?email=${user?.email}`,{
            headers:{
              authorization:`bearer ${token}`
            }
          })
          return res.json()
        },
      })


  return [refetch,myappoinments]
}
