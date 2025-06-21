import React from 'react'
import './middle.css'
import { useNavigate } from 'react-router-dom'
const MiddleBar = () => {
  const UCON=JSON.parse(localStorage.getItem('UCON'))
  const navigate=useNavigate();

  return (
    <div className='mx-auto my-4 bg-gray-100 flex flex-col md:flex-row justify-between items-center md:w-[1100px] w-full md:h-[400px]'>
      
      {/* Left Category List – Hidden on Mobile */}
      <div className='hidden md:flex justify-around items-center h-[360px]'>
        <ul className='flex h-full flex-col justify-between p-2 text-[16px] text-gray-600'>
          <li className='item'>Automobiles</li>
          <li className='item'>Clothes and wear</li>
          <li className='item'>Home interiors</li>
          <li className='item'>Computer and tech</li>
          <li className='item'>Tools, equipments</li>
          <li className='item'>Sports and outdoor</li>
          <li className='item'>Animal and pets</li>
          <li className='item'>Machinery tools</li>
          <li className='item'>More category</li>
        </ul>
      </div>

      {/* Middle Banner – Always Visible */}
      <div className='relative w-full md:w-auto'>
        <img src="src/images/banner.png" alt="Banner" className='w-full md:w-auto' />
        <div className='absolute top-8 left-8 space-y-5'>
          <div>
            <p className='text-xl md:text-2xl'>Latest Trending</p>
            <p className='text-xl md:text-2xl font-bold'>Electronic Items</p>
          </div>
          <button className='w-[100px] h-[30px] bg-white rounded-md p-1 text-[14px]'>Learn more</button>
        </div>
      </div>

      {/* Right Boxes – Hidden on Mobile */}
      <div className='hidden md:flex flex-col justify-between items-center mr-2 h-[360px] space-x-4'>
        <div className='ml-2 w-[200px] h-[150px] flex flex-col items-center justify-center bg-blue-200 p-2 rounded-md'>
          <div className='flex justify-center items-center p-2'>
            <img src="src/images/Avatar.png" alt="Avatar" />
            <div>
              <p className='text-[10px]'>Hi {UCON?.name || 'user'}</p>
              <p className='text-[10px]'>Let's Get Started</p>
            </div>
          </div>
          <button className='bg-blue-700 text-white rounded-md w-[170px] h-[30px] text-[10px] mb-2' onClick={()=>{navigate('/signup')}}>Join Now</button>
          <button className='bg-white text-blue-600 rounded-md w-[170px] h-[30px] text-[10px]' onClick={()=>{navigate('/login')}}>Log In</button>
        </div>

        <div className='w-[200px] h-[95px] bg-orange-400 flex flex-col text-[14px] p-5 rounded-md'>
          <p>US $10 off</p>
          <p>with a new</p>
          <p>supplier</p>
        </div>

        <div className='w-[200px] h-[95px] bg-green-300 flex flex-col text-[14px] p-5 rounded-md'>
          <p>Send quotes with</p>
          <p>supplier</p>
          <p>preferences</p>
        </div>
      </div>
    </div>
  )
}

export default MiddleBar;



// import React from 'react'
// import './middle.css'

// const middle_bar = () => {
//   return (
//     <div className='mx-auto my-4 bg-gray-100 flex justify-between items-center w-[1100px] h-[400px] '>
//         <div className='flex justify-around items-center h-[360px]'>
//             <ul className='flex h-full flex-col justify-between  p-2  text-[16px] text-gray-600 '>
//                 <li className='item'>Automobiles</li>
//                 <li className='item'>Clothes and wear</li>
//                 <li className='item'>Home interiors</li>
//                 <li className='item'>Computer and tech</li>
//                 <li className='item'>Tools, equipments</li>
//                 <li className='item'>Sports and outdoor</li>
//                 <li className='item'>Animal and pets</li>
//                 <li className='item'>Machinery tools</li>
//                 <li className='item'>More category</li>    

//             </ul>
//         </div>
//         <div className='relative'>
//             <img src="src/images/banner.png" alt="" />
//             <div className='absolute top-8 left-8 space-y-5'>
//                 <div>
//                 <p className='text-2xl'>Latest Trending</p><p className='text-2xl font-bold'>Electronic Items</p> 
//                 </div>
//             <button className='w-[100px] h-[30px] bg-white rounded-md p-1 text-[14px]'>Learn more</button>
//             </div>
//         </div>
//         <div className='flex flex-col justify-between h-[360px] space-x-4 '>
//             <div className='w-[200px] h-[150px] flex flex-col items-center justify-center bg-blue-200 p-2 rounded-md'>
//                 <div className='flex justify-center items-center p-2'>
//                 <img src="src/images/Avatar.png" alt="" />
//                 <div>
//                     <p className='text-[10px]'>Hi User</p> 
//                     <p className='text-[10px]'>Let's Get Started</p> 
//                 </div>
                
//                 </div>
//                 <button className='bg-blue-700 text-white rounded-md w-[170px] h-[30px] text-[10px] mb-2 '>Join Now</button>
//                 <button className='bg-white text-blue-600 rounded-md w-[170px] h-[30px] text-[10px]' >Log In</button>

//             </div>
//             <div className=' w-[200px] h-[95px] bg-orange-400 flex flex-col text-[14px] p-5 rounded-md'>
//                 <p>US $10 off</p> 
//                 <p>with a new</p> 
//                 <p>supplier</p> 
//             </div>
//             <div className='w-[200px] h-[95px] bg-green-300 flex flex-col text-[14px] p-5 rounded-md'>
//                 <p>Send quotes with</p>
//                 <p>supplier</p>
//                 <p>preferences</p>
                 
//             </div>

//         </div>
//     </div>
//   )
// }

// export default middle_bar