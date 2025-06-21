import React from 'react'

const Banner = () => {
  return (
    <div className='flex mb-4 p-6 justify-between items center bg-blue-500 w-[90%] mx-auto rounded-lg'>
        <div className='text-white ' >
        <p className='font-semibold text-2xl'>Super discount on more than 100 USD</p>
        <p className='text-sm'>Have you ever finally just write dummy info</p>
        </div>
        <div>
        <button className="bg-yellow-400 rounded-md  text-white px-2 md:px-4 py-2 text-sm font-medium">Shop Now</button>
        </div>
    </div>
  )
}

export default Banner