import React from "react";
import growth from "../../assets/graphics/illustration-audience-growth.webp";

const SquareThree = () => {
  return (
    <div>
      <div className='flex flex-col p-4 gap-4 bg-white rounded-xl shadow-md md:h-square-md md:w-square-md'>
        <p className='font-medium text-5xl md:text-7xl'>{">56%"}</p>
        <p className='text-xl md:text-lg'>faster audience growth</p>
        <img src={growth} alt='' className="w-2/3 md:w-[90%]" />
      </div>
    </div>
  );
};

export default SquareThree;
