import React from "react";
import post from "../assets/graphics/illustration-schedule-posts.webp";

const Right = () => {
  return (
    <div className='flex flex-col justify-center mx-auto px-4 py-6 md:py-8 md:pl-8 space-y-6 md:space-y-8 bg-Purple-100 rounded-xl shadow-md overflow-hidden md:h-full'>
      <p className='font-medium text-mobile md:text-4xl md:font-semibold text-center md:text-left tracking-tighter p-0 leading-7'>
        Schedule to social media.
      </p>

      <div className='hidden md:flex md:w-[350px]'>
        <img src={post} alt='' className=' md:object-cover' />
      </div>
      <img src={post} alt='' className='md:hidden' />

      <p className='text-xl md:text-lg text-center md:text-left leading-5 md:mr-4'>
        Optimize post timings to publish content at the perfect time for your
        audience.
      </p>
    </div>
  );
};

export default Right;

{
  /*<div className='flex flex-col justify-center md:justify-normal mx-auto md:mx-0 gap-7 py-12 md:pl-9 bg-Purple-100 rounded-xl shadow-md overflow-hidden'>
        <p className='font-medium text-3xl mr-8 tracking-tighter'>
          Schedule to social media.
        </p>
        <div className='flex h-auto w-[410px]'>
          <img src={post} alt='' className='' />
        </div>
        <p className='text-xl mr-8'>
          Optimize post timings to publish content at the perfect time for your
          audience.
        </p>
    </div>*/
}
