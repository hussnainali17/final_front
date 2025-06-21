import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  //   const [countries, setCountries] = useState([]);
  // const [selectedCountry, setSelectedCountry] = useState("");

  // useEffect(() => {
  //   const fetchCountries = async () => {
  //     try {
  //       const res = await axios.get("https://restcountries.com/v3.1/all");
  //       const sortedCountries = res.data
  //         .map((country) => country.name.common)
  //         .sort(); // sort alphabetically
  //       setCountries(sortedCountries);
  //     } catch (error) {
  //       console.error("Failed to fetch countries", error);
  //     }
  //   };

  //   fetchCountries();
  // }, []);

  const toggleSidebar = () => {
    if (window.innerWidth < 768) {
      setSidebarOpen(!sidebarOpen);
    }
  };

  return (
    <>
      {/* Nav Bar */}
      <div className='flex flex-col md:flex-row justify-between items-center bg-gray-100 h-auto md:h-[56px] border-1 border-gray-300 px-2 md:px-8 py-2'>
        
        

        {/* Desktop Nav Items */}
        <ul className='hidden md:flex flex-wrap justify-center md:justify-start items-center p-2 space-x-2 md:space-x-3 text-sm md:text-base'>
          <li><i className="fa-solid fa-bars"></i> All Categories</li>
          <li>Hot Offers</li>
          <li>Gift Boxes</li>
          <li>Projects</li>
          <li>Menu Items</li>
          <select className="ml-2" name="" id="">
            <option value="">Help</option>
          </select>
        </ul>

        {/* Language and Ship To (Desktop only) */}
        <div className="hidden md:flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-2 md:mt-0">
          <select className="text-sm md:text-base">
            <option value="">English,US</option>
            <option value="">Books</option>
            <option value="">Electronics</option>
            <option value="">Clothing</option>
          </select>
          <div className='flex items-center space-x-1'>
            <p>Ship To</p>
            <select className="text-sm md:text-base">
              <option value="">ge</option>
              <option value="">us</option>
              <option value="">uk</option>
            </select>
          </div>
        </div>
      </div>

      {/* Sidebar (mobile only) */}
      {sidebarOpen && (
        <>
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-md z-50 p-4 space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-lg font-semibold">Categories</h2>
              <button onClick={toggleSidebar}>
                <i className="fa-solid fa-xmark text-xl"></i>
              </button>
            </div>
            <ul className="flex flex-col space-y-3 text-sm">
              <li>Hot Offers</li>
              <li>Gift Boxes</li>
              <li>Projects</li>
              <li>Menu Items</li>
              <li>Help</li>
              <li>Language: English,US</li>
              <li>Ship To: US</li>
            </ul>
          </div>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={toggleSidebar}
          />
        </>
      )}
    </>
  );
};

export default NavBar;





// import React from 'react'

// const NavBar = () => {
//   return (
//     <div>
//       <div className='flex flex-col md:flex-row justify-between items-center bg-gray-100 h-auto md:h-[56px] border-1 border-gray-300 px-2 md:px-8 py-2'>
//         <ul className='flex flex-wrap justify-center md:justify-start items-center p-2 space-x-2 md:space-x-3 text-sm md:text-base'>
//           <li><i className="fa-solid fa-bars"></i> All Categories</li>
//           <li>Hot Offers</li>
//           <li>Gift Boxes</li>
//           <li>Projects</li>
//           <li>Menu Items</li>
//           <select className="ml-2" name="" id=""><option value="">Help</option></select>
//         </ul>
//         <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-2 md:mt-0">
//           <select name="" id="" className="text-sm md:text-base">
//             <option value="">English,US</option>
//             <option value="">Books</option>
//             <option value="">Electronics</option>
//             <option value="">Clothing</option>
//           </select>
//           <div className='flex items-center space-x-1'>
//             <p>Ship To</p>
//             <select name="" id="" className="text-sm md:text-base">
//               <option value="">ge</option>
//               <option value="">us</option>
//               <option value="">uk</option>
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default NavBar