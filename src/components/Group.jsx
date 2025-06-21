import React from 'react'

const Group = () => {
  return (
    <div className='w-full max-w-[1100px] h-[400px] mx-auto relative overflow-hidden'>
      <img src="src/images/Mask.png" alt="" className='object-cover w-full h-full rounded-lg' />

      <div className="absolute top-4 left-1 right-1 md:top-7 md:left-7 md:right-auto text-white p-2 rounded w-[98vw] md:w-full max-w-full">
        {/* Responsive flex container */}
        <div className="flex flex-col md:flex-row items-start md:gap-60 gap-6">
          {/* Text Block */}
          <div className="flex flex-col">
            <p className='text-[22px] md:text-[25px] font-semibold'>
              An easy way to send <br />requests to all suppliers
            </p>
            <p className='text-sm md:text-base'>
              Lorem ipsum dolor sit, amet consectetur adipisicing <br />
              elit. Ipsam perferendis velit aliquid.
            </p>
            {/* Send Inquiry button for mobile only */}
            <button className='block md:hidden p-2 mt-4 bg-blue-500 text-sm text-white rounded-md w-fit'>
              Send Inquiry
            </button>
          </div>

          {/* Horizontal Box: hidden on mobile, visible on md+ */}
          <div className='hidden md:block w-[400px] rounded-md h-[300px] bg-white text-black p-6'>
            <p className='text-lg font-semibold'>Send Quote To Suppliers</p>
            <div className='border border-gray-300 text-sm w-[95%] rounded-md p-1 pl-2 my-2'>What Item you need?</div>
            <textarea type="text" name="" id="" placeholder='Type More Details' rows="3" className='w-full max-w-[95%] p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none' />

            <div className='flex gap-2 items-center'>
              <div className='border text-[13px] border-gray-300 w-[40%] rounded-md p-1 pl-2 my-2'>Quantity</div>
              <select name="" id="" className='border text-[13px] border-gray-300 w-[30%] rounded-md p-1 pl-2 my-2 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option disabled selected>Pcs  </option>
                <option value="">1</option>
                <option value="">5</option>
                <option value="">7</option>
              </select>
            </div>
            <button className='p-2 mt-2 bg-blue-500 text-sm text-white rounded-md'>Send Inquiry</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Group