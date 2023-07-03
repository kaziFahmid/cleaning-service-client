import React from 'react'
import Questions from '../Questions/Questions'

export default function FaqArea() {
  return (
    <div className='flex md:flex-row flex-col mt-36 md:mt-9 justify-around items-center'>
      <Questions/>
      <div>
        <img src='https://img.freepik.com/free-photo/portrait-female-made-cleaning-worker-white-blue-uniform-isolated-white-background_155003-45512.jpg?w=360&t=st=1687540344~exp=1687540944~hmac=b6f281005de61c971a29c14f3e1c471154410835abd1f437ae4db2239cb64fbf' className='w-full'/>
      </div>
    </div>
  )
}
