import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

export default function useUsers() {
  const navigate = useNavigate()
  const token = localStorage.getItem('access-token')

  const { refetch, data: allUsers = [] } = useQuery({
    queryKey: ['allUsers'],
    queryFn: async () => {
      const res = await fetch('https://cleaning-service-server-delta.vercel.app/allusers', {
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

  return [refetch, allUsers]
}
