import React from 'react'

const footer = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-8 w-full max-w-[1200px] mx-auto justify-center items-start bg-gray-100 p-5'>
      <div className='flex flex-col gap-4 w-full lg:w-auto'>
        <div className='flex gap-3 items-center'>
          <div className="w-[44px] h-[44px] bg-blue-500 rounded-xl flex items-center justify-center shadow-[8px_0_0_rgba(96,165,250,0.4)]">
            <img src="https://i.postimg.cc/wBdJHFjk/logo.png" alt="" />
          </div>
          <h1 className="text-blue-400 text-2xl lg:text-4xl font-bold">Brand</h1>
        </div>
        <p className='text-gray-500 text-sm'>Best Information about the Company<br /> is on our social media platforms</p>
        <div className='flex gap-2 text-gray-500 text-2xl'>
          <i className="fa-brands fa-square-instagram"></i>
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-square-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>
      <div className='flex flex-wrap gap-6 w-full lg:w-auto'>
        {['About', 'Partnership', 'Information', 'For Users'].map((section, idx) => (
          <ul key={idx} className='text-gray-500 text-sm flex flex-col gap-2 min-w-[120px]'>
            <li className='font-semibold text-black'>{section}</li>
            <li>About</li>
            <li>Find Score</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        ))}
        <ul className='text-gray-500 text-sm flex flex-col gap-2 min-w-[120px]'>
          <li className='font-semibold text-black'>Get App</li>
          <div className='w-[124px] h-[42px] bg-black text-white p-2 flex justify-center items-center gap-4 rounded-md'>
            <i className="fa-brands fa-apple"></i>
            <div>
              <p className='text-[10px]'>Download on</p>
              <p className='text-[14px] font-semibold'>App Store</p>
            </div>
          </div>
          <div className='w-[124px] h-[42px] bg-black text-white p-2 flex justify-center items-center gap-4 rounded-md'>
            <i className="fa-solid fa-play"></i>
            <div>
              <p className='text-[10px]'>Download on</p>
              <p className='text-[14px] font-semibold'>Play Store</p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default footer