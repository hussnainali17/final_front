import React from 'react'
import Pro_Like from './Pro_Like'
import { useContext } from 'react'
import { ProductDataContext } from '../../Context/ProductContext'
const Description = () => {
  const { product } = useContext(ProductDataContext);
  return (
    <div className='flex flex-col lg:flex-row mx-auto px-4 lg:px-12 py-6 lg:py-12 justify-center items-start gap-6 lg:gap-8 max-w-7xl'>
      {/* Description Box */}
      <div className='w-full lg:w-[60%] p-4 lg:p-8 bg-white border border-gray-300 rounded-md'>
        {/* Tabs */}
        <div className='text-gray-500 pb-2 mb-4 border-b border-b-gray-300'>
          <ul className='flex flex-wrap gap-4 text-sm font-medium'>
            <li>Description</li>
            <li>Reviews</li>
            <li>Shipping</li>
            <li>About Seller</li>
          </ul>
        </div>

        {/* Description Text */}
        <div className='text-gray-600 text-sm leading-relaxed'>
          <p>
            {product.description}
          </p>
        </div>

        {/* Product Specs */}
        <div className="flex w-full max-w-3xl flex-col sm:flex-row gap-2 sm:gap-4 mt-6 text-gray-500">
          <ul className="flex-1">
            <li className="border border-gray-300 bg-gray-100 p-2 text-sm">Model</li>
            <li className="border border-gray-300 bg-gray-100 p-2 text-sm">Certificate</li>
            <li className="border border-gray-300 bg-gray-100 p-2 text-sm">Size</li>
            <li className="border border-gray-300 bg-gray-100 p-2 text-sm">Memory</li>
          </ul>
          <ul className="flex-[2]">
            <li className="border border-gray-300 p-2 text-sm">Classic Style</li>
            <li className="border border-gray-300 p-2 text-sm">ISO-898921212</li>
            <li className="border border-gray-300 p-2 text-sm">34mm x 450mm x 19mm</li>
            <li className="border border-gray-300 p-2 text-sm">36 GB RAM</li>
          </ul>
        </div>

        {/* Features List */}
        <div className='text-gray-500 text-xs mt-4 mb-4 space-y-2'>
          <p>✓ Some great feature name here</p>
          <p>✓ Lorem ipsum dolor sit amet, consectetur</p>
          <p>✓ Duis aute irure dolor in reprehenderit</p>
          <p>✓ Some great feature name here</p>
        </div>
      </div>

      {/* Recommended Products */}
      <div className='w-full flex justify-end md:right-3 lg:w-[35%]'>
         <Pro_Like />
       
      </div>
    </div>
  )
}

export default Description



// import React from 'react'
// import Pro_Like from './Pro_Like'

// const Description = () => {
//   return (
//     <div className='flex mx-auto p-12 justify-around gap-4 items-center'>
//     <div className=' mb-6  p-8  bg-white-300 border border-gray-300'>
//         <div className='text-gray-500 pb-2 mb-2 border-b border-b-gray-300'>
//             <ul className='flex gap-5 '>
//                 <li>Description</li>
//                 <li>Reviews</li>
//                 <li>Shipping</li>
//                 <li>About Seller</li>
//             </ul> 
//         </div>

//         <div className='text-gray-600 text-[14px]'>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br/>
// Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
//         </div>

//         <div className='flex  items-center mt-5 text-gray-500'>
//             <ul>
//                 <li className='border border-gray-300 w-[10vw] bg-gray-100  p-1 text-[14px]'>Model</li>
//                 <li className='border border-gray-300 w-[10vw] bg-gray-100 p-1 text-[14px]'>Certificate</li>
//                 <li className='border border-gray-300 w-[10vw] bg-gray-100 p-1 text-[14px]'>Size</li>
//                 <li className='border border-gray-300 w-[10vw] bg-gray-100 p-1 text-[14px]'>Memory</li>
                
                
//             </ul>
//             <ul>
//                 <li className='border border-gray-300 w-[30vw] p-1 text-[14px]'>Classic Style</li>
//                 <li className='border border-gray-300 w-[30vw] p-1 text-[14px]'>ISO-898921212</li>
//                 <li className='border border-gray-300 w-[30vw] p-1 text-[14px]'>34mm x 450mm x 19mm</li>
//                 <li className='border border-gray-300 w-[30vw] p-1 text-[14px]'>36 GB RAM</li>

                
//             </ul>
//         </div>
//         <div className='text-gray-500 text-[12px] gap-2 mt-4 mb-4 gap-2 '>
//             <p>✓ Some great feature name here</p>
//             <p>✓ Lorem ipsum dolor sit amet, consectetur </p>
//             <p>✓ Duis aute irure dolor in reprehenderit</p>
//             <p>✓ Some great feature name here</p>
//         </div>

        
//     </div>
//     <div>
//         <Pro_Like/>
//     </div>
//     </div>
//   )
// }

// export default Description