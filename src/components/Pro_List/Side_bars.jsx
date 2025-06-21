import React from 'react'



const Side_bars = () => {
  return (
    <div className="hidden md:block">
    <div className='border-t-1  border-gray-300 w-[200px]  bg-white p-4 flex flex-col gap-4'>
        <p className='text-sm font-semibold'>Catagory</p>
        <ul className='text-gray-500 text-[12px] flex flex-col gap-2'>
            <li>Mobile Accessories</li>
            <li>Electronics</li>
            <li>Smart Phones</li>
            <li>Modern tech</li>
            <a href="">See All</a>
        </ul>

    </div>

    <div className='border-t-1  border-gray-300 w-[200px]  bg-white p-4 flex flex-col gap-4'>
        <p className='text-sm font-semibold'>Brands</p>
        <ul className='text-gray-500 text-[12px] flex flex-col gap-2'>
            <li className='flex items-center gap-1'> <input type="checkbox" name="" id="" />Samsung</li>
            <li  className='flex items-center gap-1'><input type="checkbox" name="" id="" /> Apple</li>
            <li  className='flex items-center gap-1'><input type="checkbox" name="" id="" /> Huawei</li>
            <li  className='flex items-center gap-1'><input type="checkbox" name="" id="" /> Lenovo</li>
            <li  className='flex items-center gap-1'><input type="checkbox" name="" id="" /> Poco</li>
            <a href="">See All</a>
        </ul>

    </div>

   <div className='border-t-1  border-gray-300 w-[200px]  bg-white p-4 flex flex-col gap-4'>
        <p className='text-sm font-semibold'>Features</p>
        <ul className='text-gray-500 text-[12px] flex flex-col gap-2'>
            <li className='flex items-center gap-1'> <input type="checkbox" name="" id="" />Metalic</li>
            <li  className='flex items-center gap-1'><input type="checkbox" name="" id="" /> Plasic Cover</li>
            <li  className='flex items-center gap-1'><input type="checkbox" name="" id="" /> 8 GB Ram</li>
            <li  className='flex items-center gap-1'><input type="checkbox" name="" id="" /> Super Power</li>
            <li  className='flex items-center gap-1'><input type="checkbox" name="" id="" /> Large Memory</li>
            <a href="">See All</a>
        </ul>

    </div>

    <div className='border-t-1  border-gray-300 w-[200px]  bg-white p-4 flex flex-col gap-4'>
        <p className='text-sm font-semibold'>Price Range</p>
        <input type="range" name="" id="" />
        <div className='flex justify-between items-center'>
            <div><p>Min</p>
            <input type="text" placeholder='0' className='border-1 border-gray-300 focus:outline-none rounded w-[60px] p-1' />
            </div>
            <div>
            <p>Max</p>
            <input type="text" placeholder='9999' className='border-1 border-gray-300 focus:outline-none rounded w-[60px] p-1' />
            </div>
        </div>
        <button className=' text-blue-500 p-l-12 p-r-12 p-1 rounded border-1 border-gray-300'>Apply</button>

    </div>

    <div className='border-t-1  border-gray-300 w-[200px]  bg-white p-4 flex flex-col gap-4'>
        <p className='text-sm font-semibold'>Features</p>
        <ul className='text-gray-500 text-[12px] flex flex-col gap-2'>
            <li className='flex items-center gap-1'> <input type="radio" name="2" id="" />Any</li>
            <li  className='flex items-center gap-1'><input type="radio" name="2" id="" /> Refurbished</li>
            <li  className='flex items-center gap-1'><input type="radio" name="2" id="" /> Brand New</li>
            <li  className='flex items-center gap-1'><input type="radio" name="2" id="" /> Old Items</li>
            
            <a href="">See All</a>
        </ul>

    </div>
    <div className='border-t-1  border-gray-300 w-[200px]  bg-white p-4 flex flex-col gap-4'>
        <p className='text-sm font-semibold'>Features</p>
        <ul className='text-gray-500 text-[12px] flex flex-col gap-2'>
            <li className='flex items-center gap-1'> <input type="radio" name="1" id="1" />⭐⭐⭐⭐⭐</li>
            <li  className='flex items-center gap-1'><input type="radio" name="1" id="1" /> ⭐⭐⭐⭐</li>
            <li  className='flex items-center gap-1'><input type="radio" name="1" id="1" /> ⭐⭐⭐</li>
            <li  className='flex items-center gap-1'><input type="radio" name="1" id="1" /> ⭐⭐</li>
            
            <a href="">See All</a>
        </ul>

    </div>

    </div>
    
  )
}

export default Side_bars