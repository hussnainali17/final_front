import React from 'react'

const Newletter = () => {
  return (
    <div className='flex flex-col justify-center items-center mb-5 bg-gray-100 p-10'>
        <p className='font-bold text-2xl'>Subscribe Our Newsletter</p>
        <p className='text-gray-500'>Get daily updates on new products and upcoming sales all over the world</p>
        <div className='flex justify-center items-center gap-2 mt-2'>
            <input type="email" name="" className='border-1 border-gray-300 rounded-md mt-2 pl-1 p-0.5 text-[14px] focus:outline-none' placeholder='Email' id="" />
            
            <button className='p-1  mt-2 bg-blue-500 text-sm text-white rounded-md'>Subscribe</button>
        </div>
    </div>
  )
}

export default Newletter