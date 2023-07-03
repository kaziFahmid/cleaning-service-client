import React from 'react'
import { BsCheck } from 'react-icons/bs';
export default function TrustedCleaning() {
  return (
    <div className='md:grid flex   md:grid-cols-2 mt-32    container mx-auto gap-12 items-center flex-col-reverse '>
        <div>
          <img src='https://img.freepik.com/free-vector/cleaning-staff-with-cleaning-equipment-profession-staff-woman-man-cleaning-window-illustration_1284-53009.jpg?w=740&t=st=1687538682~exp=1687539282~hmac=ca3574d8794b093b9a0b2ce30f2e6b3651b25c1ba3b1812d5be57cfe7631aeaf' className='w-full' />
        </div>
        <div>
        <h1 className='md:text-5xl text-3xl font-bold leading-snug mb-9'>Trusted Cleaning Professionals For The Highest Quality Clean You  Can Always</h1>
        <p className='text-lg mt-3'> We work closely with clients in finding the most cost effective solutions while still providing a level of service that will produce a clean, healthy work environment as well as one that protects the capital investment you have made in your facility. </p>

        <p className='text-lg mt-6'>We’ll take the time to discuss your preferences and priorities with you to provide you with the best clean possible for your family.</p>

        <ul className='mt-6 md:ms-8'>
            <li className='flex gap-2 place-items-center items-center mt-4'> <BsCheck className='text-2xl'/>Families love that they can trust us to truly care for their homes.</li>
            <li  className='flex gap-2 place-items-center items-center mt-4'> <BsCheck  className='text-2xl'/>We do everything we can to make our services as affordable as possible.</li>
            <li  className='flex gap-2  place-items-center items-center mt-4'> <BsCheck  className='text-2xl'/>When you hire us, trust that your home will be cleaned your way.</li>
        </ul>
        </div>
    </div>
  )
}
