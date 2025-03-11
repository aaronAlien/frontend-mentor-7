import React from 'react'
import followers from "../assets/graphics/illustration-grow-followers.webp";

const BottomRight = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center md:items-center py-4 px-14 md:py-6 md:px-6 gap-6 md:gap-4 2xl:h-[300px] rounded-xl bg-Purple-500 text-white'>
    <img src={followers} className="md:w-1/3 lg:w-[220px] 2xl:max-w-1/2 h-auto" alt='' />
    <p className="font-medium text-3xl md:text-4xl text-center md:text-left">Grow followers with non-stop content.</p>
  </div>
  )
}

export default BottomRight