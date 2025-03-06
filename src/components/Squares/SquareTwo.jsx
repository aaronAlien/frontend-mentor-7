import React from "react";
import schdule from "../../assets/graphics/illustration-consistent-schedule.webp";

const SquareTwo = () => {
  return (
    <div className='flex flex-col p-4 pb-0 gap-4 md:gap-8 md:p-6 rounded-xl shadow-md mx-auto bg-Yellow-500 overflow-hidden h-[240px] md:max-h-auto 2xl:h-[350px]'>
      <p className='mr-8 font-semibold text-mobile md:text-3xl tracking-tighter leading-7'>
        Maintain a consistent posting schedule.
      </p>
      <img src={schdule} alt='' className="w-2/3 md:w-[600px]" />
    </div>
  );
};

export default SquareTwo;
