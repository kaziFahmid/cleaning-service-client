import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function useAppointments() {
  const token = localStorage.getItem('access-token')
const navigate=useNavigate()

  const { refetch, data: usersAppointments = [] } = useQuery({
    queryKey: ['usersAppointments'],
    queryFn: async () => {
      const res = await fetch(`https://cleaning-service-server-delta.vercel.app/usersappointments`, {
        headers: {
          authorization: `bearer ${token}`
        }
      })

      if (res.status === 401) {
  
        navigate('/login')
        return Promise.reject('Unauthorized')
      }

      return res.json()
    },
  })

  return [refetch, usersAppointments]
}
