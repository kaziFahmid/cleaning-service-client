import React, {  useEffect, useState } from 'react'
import { FaUsers} from 'react-icons/fa'
import { BsPersonWorkspace} from 'react-icons/bs'
import { GiHamburgerMenu} from 'react-icons/gi'

import { BsFillBriefcaseFill} from 'react-icons/bs'
import { Link, Outlet } from 'react-router-dom'
import { Blocks } from 'react-loader-spinner'
import useAdmin from '../hooks/useAdmin'
import useUser from '../hooks/useUser'
export default function Dashboard() {
  let [isLoading,setIsLoading]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },3000)
  })
  const[isAdmin]=useAdmin()
const [isUser]=useUser()

  return (
   <> 

   {isLoading===true?  <Blocks
  visible={true}
  height="100vh"
  width="200px"
  ariaLabel="blocks-loading"
  wrapperStyle={{ 
   margin:'auto',  // Adjust the font size to make the 
}}
  wrapperClass="blocks-wrapper"
/>: <div className='grid  grid-cols-1  lg:grid-cols-12'>
      
      <div className='lg:col-span-2 hidden  lg:block'>
   <div className='h-screen bg-blue-950 pt-12  '>
{isAdmin.admin?<h1 className='text-center text-2xl text-white '>Admin</h1>:<h1 className='text-center text-2xl text-white '>User</h1>}
{/* admin */}
{isAdmin.admin&&<ul className=' mt-20 mx-2 text-white  '>

<Link to='/dashboard/manageusers'> <li className='flex gap-5 hover:bg-blue-500 duration-200  place-items-center p-2 rounded-lg cursor-pointer '> <FaUsers /> Manage Users</li></Link>

<Link to='/dashboard/usersbookings'>   <li className='flex gap-5 duration-200    rounded-lg p-2 hover:bg-blue-500  place-items-center  mt-6 cursor-pointer'> <BsPersonWorkspace />Users Bookings</li></Link>
<Link to='/dashboard/staffmanagement'> <li className='flex gap-5 duration-200    rounded-lg p-2 hover:bg-blue-500  place-items-center  mt-6 cursor-pointer'> <BsFillBriefcaseFill/>Staff Management</li></Link>
</ul>}


{/* user */}


{isUser.user&&<ul className=' mt-20 mx-2 text-white  '>
  <Link to='/dashboard/myappoinments'>  <li className='flex gap-5 hover:bg-blue-500 duration-200  place-items-center p-2 rounded-lg cursor-pointer '> <FaUsers /> My Appoinments</li></Link>

<Link to='/dashboard/paymenthistory'>    <li className='flex gap-5 hover:bg-blue-500 duration-200  place-items-center p-2 rounded-lg cursor-pointer '> <FaUsers />Payment History</li></Link>

</ul>}








   </div>









   
      </div>
      <div className='md:col-span-10'>
      <div className="navbar bg-white shadow-lg text-primary-content">
  <a className=" text-black text-2xl font-bold">Dashboard</a>

  <div className="drawer z-50 ">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ms-auto">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn  lg:hidden  drawer-button"><GiHamburgerMenu/></label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    
    <div className=" p-4  bg-blue-950 w-60 h-full  text-white ">
 
    <div className="drawer-content  ">
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">X</label>
  </div> 

<div className='mt-16'>
{isAdmin.admin?<h1 className='text-center text-2xl text-white '>Admin</h1>:<h1 className='text-center text-2xl text-white '>User</h1>}
</div>
     
{isAdmin.admin&&<ul className=' mt-20 mx-2 text-white  '>

<Link to='/dashboard/manageusers'> <li className='flex gap-5 hover:bg-blue-500 duration-200  place-items-center p-2 rounded-lg cursor-pointer '> <FaUsers /> Manage Users</li></Link>

<Link to='/dashboard/usersbookings'>   <li className='flex gap-5 duration-200    rounded-lg p-2 hover:bg-blue-500  place-items-center  mt-6 cursor-pointer'> <BsPersonWorkspace />Users Bookings</li></Link>
<Link to='/dashboard/staffmanagement'> <li className='flex gap-5 duration-200    rounded-lg p-2 hover:bg-blue-500  place-items-center  mt-6 cursor-pointer'> <BsFillBriefcaseFill/>Staff Management</li></Link>
</ul>}


{/* user */}


{isUser.user&&<ul className=' mt-20 mx-2 text-white  '>
  <Link to='/dashboard/myappoinments'>  <li className='flex gap-5 hover:bg-blue-500 duration-200  place-items-center p-2 rounded-lg cursor-pointer '> <FaUsers /> My Appoinments</li></Link>

<Link to='/dashboard/paymenthistory'>    <li className='flex gap-5 hover:bg-blue-500 duration-200  place-items-center p-2 rounded-lg cursor-pointer '> <FaUsers />Payment History</li></Link>

</ul>}




    </div>
  </div>
</div>
  
</div>
<Outlet/>


      </div>

 
    </div>
   
   
   
   
   
   
   
   
   }
 
   
  
   
   
   </>
  )
}
