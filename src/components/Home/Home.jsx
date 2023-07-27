import React from 'react'
import Banner from './Banner/Banner'
import TrustedCleaning from './TrustedCleaning/TrustedCleaning'
import FaqArea from './FaqArea/FaqArea'
import TeamMember from '../TeamMember/TeamMember'


export default function Home() {
  return (
    <div>

      <Banner/>
      <TrustedCleaning/>
      <FaqArea/>
      <TeamMember/>

      <div className='grid mt-20 lg:grid-cols-2 grid-cols-1 items-center container mx-auto gap-5'>
        <div >
          <img  src="https://i.ibb.co/mGMxzMC/h6-about1.png" className='w-full'  />
        </div>

        <div  className=' mt-24 md:mt-0'>
          <h4>About Cleaning Agency ........</h4>
          <h1 className='md:text-6xl  text-4xl font-bold'>We Have Been Doing Projects Since 2018</h1>
          <p className='mt-10 text-lg'>Bixol is a design studio founded in London. Nowadays, we’ve grown and expanded our services, and have become a multinational firm, offering a variety of services and solutions Worldwide.</p>
          <p className='mt-10 text-lg'>Our agency can only be as strong as our people & because of this, our team have designed game changing products.</p>

          <div className='flex md:flex-row flex-col justify-around items-center mt-10'>
            <ul>
              <li className='mt-4 text-lg'>Cost Effective</li>
              <li className='mt-4 text-lg'>100% Satisfaction</li>
            </ul>
            <ul >
              <li className='mt-4'>
Insured and Bonded</li>
              <li className='mt-4'>Quality Services</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}
