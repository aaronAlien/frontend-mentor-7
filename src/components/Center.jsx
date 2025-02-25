import React from "react";
import stars from "../assets/graphics/illustration-five-stars.webp";

const Center = () => {
  return (
    <div className='flex flex-col mx-auto text-center'>
      <div className='flex flex-col justify-center md:justify-normal w-full mx-auto items-center gap-6 py-8 px-6 md:py-12 md:px-8 bg-Purple-500 text-white rounded-xl shadow-md md:h-full'>
        <h1 className='font-medium text-5xl md:text-6xl'>
          Social Media <span className='text-Yellow-500'>10x</span>{" "}
          <span className='italic'>Faster</span> with AI
        </h1>
        <div className='flex flex-col gap-2'>
          <img src={stars} alt='' className='w-2/3 mx-auto' />
          <p className='font-light text-xl md:text-lg'>Over 4,000 5-star reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Center;
