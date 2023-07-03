import React from 'react'

import axios from 'axios'
import { Button, message } from 'antd';
import useAppoinments from '../hooks/useAppoinments';
export default function UsersBookings() {
  const [refetch,usersappoinments]=useAppoinments()
  const [messageApi, contextHolder] = message.useMessage();
  let handleApprove=(_id)=>{
    axios.patch(`/usersappoinments/${_id}`,{
      status:'approved'
    })
    .then((res)=>{
      if(res.modifiedCount>0){
        refetch()
        messageApi.open({
          type: 'success',
          content: 'Appoinment has been Approved',
          className: 'custom-class',
          style: {
            marginTop: '20vh',
          },
        });
       
      }

})
  }

  let handleDeny=(_id)=>{
    axios.patch(`/usersappoinments/${_id}`,{
      status:'denied'
    })
    .then((res)=>{
      if(res.modifiedCount>0){
        refetch()
        messageApi.open({
          type: 'success',
          content: 'Appoinment has been Denied',
          className: 'custom-class',
          style: {
            marginTop: '20vh',
          },
        });
      }

})
  }





  return (
    <div className="  overflow-x-auto h-96  md:w-full w-screen mt-9">
      {contextHolder}
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>SL</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Service Name</th>
          <th>Service Date</th>
          <th>Time of Service</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

   {usersappoinments.map((myappoinment,index)=>{
    return <tr>
    <td>{index+1}</td>
          <td>{myappoinment.firstName+" "+myappoinment.lastName}</td>
          <td>{myappoinment.email}</td>
          <td>{myappoinment.address}</td>
          <td>{myappoinment.phoneNumber}</td>
          <td>{myappoinment.cleaningName}</td>
          <td>{new Date(myappoinment.serviceDate).toLocaleDateString()}</td>
          <td>{myappoinment.hour+':'+myappoinment.minute+myappoinment.period}</td>
          <td><span className={myappoinment.status==='pending'&&`bg-yellow-400 px-4 rounded-xl`||myappoinment.status==='approved'&&`bg-green-500 px-4 rounded-xl`||myappoinment.status==='denied'&&`bg-red-500 px-4 rounded-xl text-white`}>{myappoinment.status}</span></td>

          <td className='flex justify-around items-center gap-1'><button disabled={myappoinment.status==='denied'&&true} className='btn bg-red-500 text-white' onClick={()=>{handleDeny(myappoinment._id)}} >Deny</button>
          
          <button disabled={myappoinment.status==='approved'&&true}  className='btn bg-green-500 text-white' onClick={()=>{handleApprove(myappoinment._id)}} >Approve </button>
          
          </td>
        </tr>})}     
     
      </tbody>
    </table>
  </div>
  )
}
