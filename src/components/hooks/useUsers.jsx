import { useQuery } from "@tanstack/react-query"


export default function useUsers() {
  const token=localStorage.getItem('access-token')

 const{refetch,data:allusers=[]}= useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
          const res = await fetch('http://localhost:5000/allusers',{
            headers:{
              authorization:`bearer ${token}`
            }
          })
          return res.json()
        },
      })


  return [refetch,allusers]
}
