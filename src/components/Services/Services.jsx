import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
  const{data:services=[]}= useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const res = await fetch(`https://cleaning-service-server-delta.vercel.app/services`)
      return res.json()
    },
  })
  


  return (
    <div>
         <div className=" bg-center bg-fixed bg-no-repeat   bg-cover  bg-[linear-gradient(to_right,rgba(65,63,164,1),rgba(25,169,242,0.5298494397759104)),url('https://img.freepik.com/free-photo/disinfecting-home_155003-9129.jpg?w=740&t=st=1687516573~exp=1687517173~hmac=775aa15a6692640e2220375bdccf71206252a407a2885f80929b40d5f383a096')] py-28">
          <h1 className='text-center text-white font-bold text-6xl  '>Services</h1>
         </div>

<div className='text-center mt-40'>
<h3 className='text-xl text-blue-700'>Features</h3>
         <h1 className='text-4xl font-bold'>Why We Are Best</h1>
</div>

<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto gap-10 mt-28'>
  {
    services.map((service)=>{ return<div>
        
      <img src={service.image} alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md"/>    
      
   <div className="relative px-4 -mt-16  ">
     <div className="bg-white hover:-translate-y-4 duration-300 hover:bg-blue-950  hover:text-white p-6 rounded-lg shadow-lg">
      <div className="flex items-baseline">
        <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
   
        </span>
        <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
      
    </div>  
      </div>
      
      <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate"> {service.name}</h4>
   
    <div className="mt-1">
      <p>{service.description.slice(0,80)}<Link className='text-blue-500' to={`/servicedetails/${service._id}`}>...Load more</Link></p>
  
    </div>
    <div className="mt-4">
  
    </div>  
    </div>
   </div>
    
  </div> 
    
     })
  }


</div>


    </div>
  )
}
