import React from "react";
import accounts from "../../assets/graphics/illustration-multiple-platforms.webp";

const SquareOne = () => {
  return (
    <div className='flex flex-col p-4 gap-4 md:gap-12 rounded-xl shadow-md overflow-hidden md:h-square-md md:w-square-md bg-white'>

        <img src={accounts} alt='' className='md:scale-[155%] md:pl-13 md:pt-4 bg-white' />

      <p className='text-BlackText text-mobile md:text-3xl md:mr-10 font-semibold tracking-tighter md:text-left leading-7'>
        Manage multiple accounts and platforms.
      </p>
    </div>
  );
};

export default SquareOne;
