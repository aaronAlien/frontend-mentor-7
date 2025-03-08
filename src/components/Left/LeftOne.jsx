import React from "react";
import create from "../../assets/graphics/illustration-create-post.webp";

const LeftOne = () => {
  return (
    <div className='flex flex-col p-4 gap-4 md:py-20 md:px-8 justify-center bg-Yellow-100 rounded-xl md:h-full'>
      <p className='font-semibold text-3xl md:text-4xl tracking-tighter leading-8'>
        Create and schedule content{" "}
        <span className='text-Purple-500 italic'>quicker.</span>
      </p>
      <img src={create} alt='' className="w-1/2 md:w-auto" />
    </div>
  );
};

export default LeftOne;
