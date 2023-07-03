import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

import { Button, message, Space } from 'antd';

export default function StaffManagement() {
  const [messageApi, contextHolder] = message.useMessage();
  const{refetch,data:allstaff=[]}= useQuery({
    queryKey: ['allstaff'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/allstaff`)
      return res.json()
    },
  })

  let handleFire=(_id)=>{

    axios.patch(`http://localhost:5000/allstaff/${_id}`,{
      status:"fire"
    })
    .then(res=>{
     if(res.modifiedCount>0){
      messageApi.open({
        type: 'success',
        content: ` ${allstaff.find((staff)=>staff._id===_id).name} has been fired successfully`,
      });
      refetch()

     }
    })
  }

  let handleCancel=(_id)=>{
    axios.patch(`http://localhost:5000/allstaff/${_id}`,{
      status:"cancel"
    })
    .then(res=>{
     if(res.modifiedCount>0){
      messageApi.open({
        type: 'success',
        content: ` Canceled`,
      });
      refetch()
     }
    })
  }
  return (
    
    <div>
            {contextHolder}
<div className="overflow-x-auto h-96  md:w-full w-screen mt-9">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Sl</th>
        <th>Picture</th>
        <th>Name</th>
        <th>Position</th>
        <th>Experience</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
{allstaff.map((staff,index)=>{return  <tr key={index }className={`bg-base-200 ${staff.status=='fire'&&"bg-red-500"}`}>
        <td>{index+1}</td>
        <td><div className="avatar">
  <div className="w-14 rounded-full">
    <img src={staff.picture}/>
  </div>
</div></td>
        <td>{staff.name}</td>
        <td>{staff.position}</td>
        <td>{staff.experience}</td>
        <td><button className='bg-red-500 btn text-white' onClick={()=>handleFire(staff._id)}disabled={staff.status==="fire"?true:false}>Fire</button>
        
        <button className='bg-yellow-400 btn text-white ms-2' onClick={()=>handleCancel(staff._id)}>Cancel</button>
        </td>
      </tr>})}
     

  
  
    </tbody>
  </table>
</div>
      
    </div>
  )
}
