import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import { Button, Modal,message } from 'antd';
import useAuth from '../hooks/useAuth';
import { DatePicker, Space } from 'antd';
import axios from 'axios';
import useMyAppoinments from '../hooks/useMyAppoinments';

export default function ServiceDetails() {
  const{user}=useAuth()
  const [messageApi, contextHolder] = message.useMessage();
  
  const key = 'updatable';
  const{data:servicesnames=[]}= useQuery({
    queryKey: ['servicename'],
    queryFn: async () => {
      const res = await fetch(`https://cleaning-service-server-delta.vercel.app/services/servicename`)
      return res.json()
    },
  })
  
  const[refetch,myappoinments]=useMyAppoinments()

  const data=useLoaderData()

const navigate=useNavigate()
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState(user?.email || '');
  const [serviceDate, setServiceDate] = useState(null);

  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [period, setPeriod] = useState('AM');
  const onChange = (date, dateString) => {
  

    setServiceDate(date,dateString);


  };
  const showModal = () => {
    if(!user){
      navigate('/login')
    }
    setOpen(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);

const appoinment={
  id:data._id,
  cleaningName:data?.name,
  firstName,
  lastName,
  address,
  phoneNumber,
  email,
  serviceDate,
  hour,
  minute,
  period,
  rate:data.rate,
status:"pending"

}

  axios.post('/appoinments',appoinment)
  .then(res=>{
    if(res.insertedId){
      refetch()
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Booking successful',
        duration: 2,
      });
    }, 1000);
  }})

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };



      
      
  return (
    <>
    {contextHolder}
         <div className="bg-center  bg-fixed bg-no-repeat bg-cover py-28" style={{ backgroundImage: `linear-gradient(to right, rgba(65, 63, 164, 1), rgba(25, 169, 242, 0.5298494397759104)), url(${data.cardImg})` }}>
          
          <h1 className='text-center text-white font-bold  text-3xl md:text-6xl  '>Services/{data.name}</h1>
         </div>
      
      <div className='grid md:grid-cols-12  grid-cols-1 container mx-auto'>
        <div className='md:col-span-4'>

     <div className='mt-28 border-t-4 border-t-yellow-400 md:w-80 pt-5  '>
        <h2 className='font-bold text-black text-3xl text-center'>{data.name}</h2>
        <h2 className='text-center mt-2 text-lg font-bold'>Rate: ${data.rate}</h2>
     <ul className='md:w-full  mt-6 '>
         {servicesnames.map((servicesname)=>{
         
                return <Link to={`/servicedetails/${servicesname._id}`}><li key={servicesname._id} className=' rounded-md border-b font-bold hover:bg-blue-600 duration-200 bg-white py-4 ps-5 hover:text-white  cursor-pointer' >{servicesname.name}</li></Link>
       
         })}
              </ul>

       <div className='text-center mt-5'>
        
  


       <Button disabled={!user?.email ?'':myappoinments.some((appoinment)=>appoinment.id===data._id&&true)} type="primary" className='btn bg-yellow-400 w-full  ' onClick={showModal}>
       Book an Appoinment
      </Button>
      <Modal
        okButtonProps={{ className: 'btn bg-blue-400 text-white' }}
        cancelButtonProps={{ className: 'btn bg-red-400 text-white' }}
        title={<span className="text-xl">{data.name} Appoinment</span>}
        okText="Submit"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      
  
      >
        <form className="mt-6 mb-6 h-96 overflow-x-hidden">
          {/* Rest of your form */}
          <div className="flex md:flex-row flex-col justify-between items-center">
            <label htmlFor="firstName" className="text-lg">
              First Name:
            </label>
            <input
              type="text"
              placeholder="Type First Name here"
              className="input input-bordered w-full max-w-xs"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex md:flex-row flex-col justify-between items-center mt-4">
            <label htmlFor="lastName" className="text-lg">
              Last Name:
            </label>
            <input
              type="text"
              placeholder="Type Last Name here"
              className="input input-bordered w-full max-w-xs"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex md:flex-row flex-col  justify-between items-center mt-4 ">
            <label htmlFor="address" className="text-lg">
              Address:
            </label>
            <input
              type="text"
              placeholder="Type Addresss here"
              className="input input-bordered w-full max-w-xs"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex md:flex-row flex-col justify-between items-center mt-4">
            <label htmlFor="phoneNumber" className="text-lg">
              Phone Number:
            </label>
            <input
              type="number"
              placeholder="Type Phone Number here"
              className="input input-bordered w-full max-w-xs"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="flex md:flex-row flex-col justify-between items-center mt-4">
            <label htmlFor="email" className="text-lg">
              Email Address:
            </label>
            <input
              type="email"
              placeholder="Type Email here"
              className="input input-bordered w-full max-w-xs"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex md:flex-row flex-col justify-between items-center mt-4">
            <label htmlFor="service" className="text-lg">
              Date of Service:
            </label>
            <DatePicker
              className="py-2 w-72 max-w-xs"
              onChange={onChange}
              value={serviceDate}
            />
          </div>
          <div className="flex  md:flex-row flex-col justify-between mt-4 items-center">
            <label htmlFor="hour" className="text-lg">
              Hour:
            </label>
            <input
              type="number"
              id="hour"
              name="hour"
              min="1"
              max="12"
              className="input input-bordered w-20 max-w-xs"
              value={hour}
              onChange={(e) => setHour(e.target.value)}
            />
          </div>
          <div className="flex md:flex-row flex-col justify-between mt-4 items-center">
            <label htmlFor="minute" className="text-lg">
              Minute:
            </label>
            <input
              type="number"
              id="minute"
              name="minute"
              min="0"
              max="59"
              className="input input-bordered w-20 max-w-xs"
              value={minute}
              onChange={(e) => setMinute(e.target.value)}
            />
          </div>
          <div className="flex  md:flex-row flex-col justify-between mt-4 items-center">
            <label htmlFor="period" className="text-lg">
              AM/PM:
            </label>
            <select
              id="period"
              className="input input-bordered w-20 max-w-xs"
              name="period"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </form>
      </Modal>







        </div>    
     </div>

        </div>
        <div className=' md:col-span-8'>

        <div className='mt-28'>
        <div >
            <img src= {data.image}  className='w-full rounded-md '/>
          </div>
         <h1 className='md:text-6xl text-3xl font-bold mt-6'>We give the best Services</h1>
         <p className='mt-6 text-lg'>{data.description}</p>

        <div className='mt-5'>
          <h2 className='md:text-4xl font-bold text-3xl'>Service Overviews</h2>

          <p className='mt-4  text-lg'>A neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you to complete depending on the size.</p>
          <p className='mt-5 text-lg'>Condition of your home. We work in teams of 2-4 or more. A team leader or the owner.</p>
          <ul  className='mt-5 text-lg'>
            <li  className='mt-5'>The housekeepers we hired are professionals who take pride in doing excellent work and in exceeding expectations.</li>

            <li className='mt-5 text-lg'>We carefully screen all of our cleaners, so you can rest assured that your home would receive the absolute highest quality of service providing.</li>

            
            <li  className='mt-5 text-lg'>Your time is precious, and we understand that cleaning is really just one more item on your to-do list.</li>

          </ul>
        </div>

        </div>


        </div>
      </div>
      
    </>
  )
}
