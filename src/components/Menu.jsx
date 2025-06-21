import React from 'react';
import { useNavigate } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose }) => {
  const navigate=useNavigate();
  const sign=()=>{
    navigate('/signup')
  }
  return (
    <div className={`fixed inset-0 z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-white w-4/5 max-w-sm shadow-lg`}>
      {/* Close Button */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gray-200 rounded-full" />
          <p onClick={()=>{sign()}} className="text-sm text-gray-600">Sign in | Register</p>
        </div>
        <button onClick={onClose}>
          <i className="fa-solid fa-xmark text-xl text-gray-500"></i>
        </button>
      </div>

      {/* Menu Items */}
      <ul className="px-4 py-2 space-y-4 text-gray-700">
        <li className="flex items-center gap-2"><i className="fa-solid fa-house"></i> Home</li>
        <li className="flex items-center gap-2"><i className="fa-solid fa-bars"></i> Categories</li>
        <li className="flex items-center gap-2"><i className="fa-regular fa-heart"></i> Favorites</li>
        <li className="flex items-center gap-2"><i className="fa-solid fa-box"></i> My Orders</li>

        <hr />

        <li className="flex items-center gap-2"><i className="fa-solid fa-globe"></i> English | USD</li>
        <li className="flex items-center gap-2"><i className="fa-solid fa-headphones"></i> Contact Us</li>
        <li className="flex items-center gap-2"><i className="fa-solid fa-building"></i> About</li>

        <hr />

        <li>User agreement</li>
        <li>Partnership</li>
        <li>Privacy policy</li>
      </ul>
    </div>
  );
};

export default MobileMenu;
