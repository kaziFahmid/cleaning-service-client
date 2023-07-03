import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function useAppoinments() {
    const token=localStorage.getItem('access-token')

    const{refetch,data:usersappoinments=[]}= useQuery({
        queryKey: ['usersappoinments'],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/usersappoinments`,{
            headers:{
              authorization:`bearer ${token}`
            }
          })
          return res.json()
        },
      })


  return [refetch,usersappoinments]
}
