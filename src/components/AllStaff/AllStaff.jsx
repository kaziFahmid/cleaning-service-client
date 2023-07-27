import React from 'react'

import { useQuery } from '@tanstack/react-query'
export default function AllStaff() {

    const{refetch,data:allstaff=[]}= useQuery({
        queryKey: ['allstaff'],
        queryFn: async () => {
          const res = await fetch(`https://cleaning-service-server-delta.vercel.app/allstaff`)
          return res.json()
        },
      })

  return (
    <div className='grid grid-cols-1  lg:grid-cols-3 mx-auto container '>
        {allstaff.map((staff)=>{
           return <div className="  mx-auto mt-5 card md:w-96  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={staff.picture} alt="Shoes" className="rounded-xl h-64 w-full object-scale-down" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{staff.name}</h2>
              <p>{staff.position}</p>
              <p>Experience : {staff.experience}</p>
              
            </div>
          </div>
        })}
      
    </div>
  )
}
