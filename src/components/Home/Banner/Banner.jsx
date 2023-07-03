import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



// import required modules
import { Navigation } from "swiper";


export default function Banner() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    <SwiperSlide>
     
      <div className=" bg-center bg-fixed bg-no-repeat   bg-cover  bg-[linear-gradient(to_right,rgba(65,63,164,1),rgba(25,169,242,0.5298494397759104)),url('https://img.freepik.com/free-photo/disinfecting-home_155003-9129.jpg?w=740&t=st=1687516573~exp=1687517173~hmac=775aa15a6692640e2220375bdccf71206252a407a2885f80929b40d5f383a096')]">
       <div className='md:px-40 py-40'>
<h1 className='text-white md:text-7xl  text-3xl font-bold text-center '>CleanBuzz is Popular Cleaning Company</h1>
<p className='text-white md:text-lg text-sm mt-4 text-center'>Quisque suscipit ipsum est venenatis seo ornare eget uto porta facilisis elementum sed condimentum sed massa quis ullam corper donec at scelerisque at new company.</p>
<div className='text-center'>
<button className="btn btn-warning mt-4">Warning</button>
</div>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>


    <div className=" bg-center bg-no-repeat   bg-cover  bg-[linear-gradient(to_right,rgba(65,63,164,1),rgba(25,169,242,0.5298494397759104)),url('https://img.freepik.com/free-photo/young-girl-is-holding-cleaning-product-gloves-rags-basin-white-wall_1150-21780.jpg?w=740&t=st=1687537438~exp=1687538038~hmac=026d4390916da069ebe3964d11412f36f110895db2eba6a77b7df3f0d927f59a')]">
       <div className='md:px-40 py-40'>
<h1 className='text-white md:text-7xl  text-3xl font-bold text-center '>CleanBuzz is Popular Cleaning Company</h1>
<p className='text-white md:text-lg text-sm mt-4 text-center'>Quisque suscipit ipsum est venenatis seo ornare eget uto porta facilisis elementum sed condimentum sed massa quis ullam corper donec at scelerisque at new company.</p>
<div className='text-center'>
<button className="btn btn-warning mt-4">Warning</button>
</div>
       </div>
      </div>








    </SwiperSlide>
    <SwiperSlide>

    <div className=" bg-center bg-no-repeat   bg-cover  bg-[linear-gradient(to_right,rgba(65,63,164,1),rgba(25,169,242,0.5298494397759104)),url('https://img.freepik.com/free-photo/full-shot-men-cleaning-office_23-2149345516.jpg?w=740&t=st=1687537490~exp=1687538090~hmac=805a2f7491c938992e715e4c4a189aa2830bad2f38a33e1db44d0d4a3393072c')]">
       <div className='md:px-40 py-40'>
<h1 className='text-white md:text-7xl  text-3xl font-bold text-center'>CleanBuzz is Popular Cleaning Company</h1>
<p className='text-white md:text-lg text-sm mt-4 text-center'>Quisque suscipit ipsum est venenatis seo ornare eget uto porta facilisis elementum sed condimentum sed massa quis ullam corper donec at scelerisque at new company.</p>
<div className='text-center'>
<button className="btn btn-warning mt-4">Warning</button>
</div>
       </div>
      </div>












    </SwiperSlide>
    
  </Swiper>
  )
}
