import React from 'react'

const Lower = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center bg-gray-300 p-4 gap-3'>
      <div className='flex justify-center items-center'>
        <p className='text-sm text-gray-500 text-center'>© 2023 Ecommerce. All rights reserved.</p>
      </div>
      <div className='flex justify-center items-center text-gray-500'>
        <select className="text-sm p-1 rounded border border-gray-400">
          <option value="">English, US</option>
          <option value="">Books</option>
          <option value="">Electronics</option>
          <option value="">Clothing</option>
        </select>
      </div>
    </div>
  )
}

export default Lower