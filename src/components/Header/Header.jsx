import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import useAuth from '../hooks/useAuth';
export default function Header() {
  const{ user,logOut}=useAuth()


  return (
   <>
   <div className='sticky top-0 z-50 shadow-lg   '>

   <div className='bg-blue-950 text-white    py-2'>
    <ul className='flex flex-col   md:flex-row md:justify-center md:items-center gap-4'>
        <li className='flex md:justify-center items-center gap-4 '><BsTelephoneFill/>Phone: +55 654 541 17</li> 
        <li className='flex md:justify-center items-center  gap-4 '><MdEmail/>Email: Claniz@7oroof.com</li>

    </ul>
   </div>
   <header  className="navbar bg-white   p-6 text-primary-content flex justify-between items-center ">
  <a className="btn btn-ghost normal-case text-2xl font-bold text-blue-500 ">CleanBuzz</a>
  





  
  <ul className='lg:flex hidden items-center  mr-24 text-blue-950  font-bold justify-center gap-16'>
    <li className='hover:text-blue-500 duration-200 '><Link to='/'>Home</Link></li>
    <li className='hover:text-blue-500 duration-200'><Link to='/dashboard'>Dashboard</Link></li>
    <li className='hover:text-blue-500 duration-200'><Link to='/services'>Services</Link></li>
  
  <li className='hover:text-blue-500 duration-200'><Link to='/allstaff'>All Staff</Link></li>
  {user?.email &&  <li title={user?.displayName} className='hover:text-blue-500 duration-200'><div className="avatar">
  <div className="w-12 rounded-full">
    <img src={user?.photoURL} />
  </div>
</div></li>}
  {user?.email?<li className='hover:text-blue-500 duration-200' onClick={()=> logOut()}>LogOut</li>:<li className='hover:text-blue-500 duration-200'><Link to='/login'>Login</Link></li>}   
{!user?.email?<li className='hover:text-blue-500 duration-200'><Link to='/signup'>Signup</Link></li>:''}
  </ul>
  

 <div className='lg:hidden '>



 <div className="drawer drawer-end z-50">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button btn bg-white"><GiHamburgerMenu className='text-lg'/></label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 h-full bg-white text-base-content">

    <div className="drawer-content">
    {/* Page content here */}
  <div className='text-end'>
  <label htmlFor="my-drawer-4" className="drawer-button btn ">X</label>
  </div>
  </div> 
  {user?.email &&  <li title={user?.displayName} className='hover:text-blue-500 duration-200 mt-11'><div className="avatar">
  <div className="w-12 rounded-full">
    <img src={user?.photoURL} />
  </div>
</div></li>}
<li className='text-lg mt-7'><Link to='/'>Home</Link></li>
  {user?.email&&  <li className='text-lg mt-7'><Link to='/dashboard'>Dashboard</Link></li>}
    <li className='text-lg mt-7'><Link to='/services'  >Services</Link></li>
    <li className='text-lg mt-7'><Link to='/allstaff'>All Staff</Link></li>

    {user?.email?<li className='text-lg mt-7 'onClick={()=>{logOut()}}><Link to='/signup'>Logout</Link></li>:<li className='text-lg mt-7'><Link to='/login'>Login</Link></li>}   
{!user?.email?<li className='text-lg mt-7'><Link to='/signup'>Signup</Link></li>:''}












    </ul>

    
  </div>
</div>



 </div>
 

</header>
   



   </div>
   </>
  )
}
