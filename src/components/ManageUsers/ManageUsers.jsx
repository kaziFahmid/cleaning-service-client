import React, { useEffect } from 'react'
import useUsers from '../hooks/useUsers'
import { Button, message, Space } from 'antd';
import { FaUserShield } from 'react-icons/fa';
import axios from 'axios';
export default function ManageUsers() {
  const [messageApi, contextHolder] = message.useMessage();
  const [refetch,allusers]=useUsers()

  let handleMakeAdmin=(_id)=>{
    axios.patch(`/allusers/${_id}`,{
      role:"admin"
    })
    .then(res=>{

      if(res.modifiedCount>0){
        messageApi.open({
          type: 'success',
          content: 'Admin created succesfully',
        });
        refetch()
      }
    })
    
  }

  return (
 
<>
{contextHolder}
<div  >

 <div className='overflow-x-auto h-96  md:w-full w-screen mt-9'>

 <table className="table ">

<thead>
  <tr>
    <th>SL</th>
    <th>Image</th>
    <th>Name</th>
    <th>Email</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>

 {allusers.map((alluser,index)=>{return <tr>
    <th>{index+1}</th>
    <td><div className="avatar">
<div className="w-11 rounded-full">
<img src={alluser.image}/>
</div>
</div></td>
    <td>{alluser.username}</td>
    <td>{alluser.email}</td>
    <td>{alluser.role==="admin"?"admin":<button onClick={()=>handleMakeAdmin(alluser._id)} className='btn bg-red-700 text-red text-white'><FaUserShield /></button>}</td>
  </tr>})}
 

</tbody>
</table>
 </div>
</div>
 </>
  )
}
