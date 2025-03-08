import React from 'react'
import ai from '../../assets/graphics/illustration-ai-content.webp'

const LeftTwo = () => {
  return (
    <div className='flex flex-col p-4 gap-4 md:gap-10 md:p-8 justify-center bg-Yellow-500 rounded-xl md:h-full'>
      <p className="font-semibold text-3xl md:text-4xl tracking-tighter pr-8">Write your content using AI.</p>
      <img src={ai} alt="" className='w-2/3 md:w-[650px]' />
        
    </div>
  )
}

export default LeftTwo