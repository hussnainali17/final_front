import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import MobileMenu from './Menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const showBackButtonRoutes = ['/product_list', '/cart', '/product_detail'];
  const isBackButtonPage = showBackButtonRoutes.some(path =>
    location.pathname.startsWith(path)
  );

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/admin/search?q=${searchQuery}`);
      
      const results = [...res.data.matched, ...res.data.related];
     
      setSearchResults(results);
      
      setShowResults(true);
    } catch (err) {
      console.error('Search error:', err);
    }
  };

  const handleProductClick = (id) => {
    setShowResults(false);
    setSearchQuery('');
    //console.log('searchResults:', searchResults);
     navigate('/product_list', {
    state: {
      results: searchResults,
     // we'll use this to fetch related products
    }
  });
  };
  function cart(){
    const UCON=localStorage.getItem('UCON')
    if(!UCON){
      navigate('/login')
    }
    navigate('/cart');
  }

  const renderSearchDropdown = () => (
    showResults && searchResults.length > 0 && (
      <div className="absolute z-50 mt-1 max-h-72 overflow-y-auto bg-white border border-blue-300 w-full rounded-md shadow-md">
        {searchResults.map((item, index) => (
          <div
            key={index}
            className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm text-gray-800"
            onClick={() => handleProductClick(item._id)}
          >
            {item.name} <span className="text-gray-500 text-xs">({item.title})</span>
          </div>
        ))}
      </div>
    )
  );

  return (
    <>
      {/* Mobile Header */}
      <div className="block md:hidden w-full p-2 space-y-2 bg-white shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isBackButtonPage ? (
              <button onClick={() => navigate(-1)}>
                <i className="fa-solid fa-arrow-left text-xl text-gray-600" />
              </button>
            ) : (
              <>
                <button onClick={() => setIsMenuOpen(true)}>
                  <i className="fa-solid fa-bars text-xl text-gray-600" />
                </button>
                <div className="w-[44px] h-[44px] bg-blue-500 rounded-xl flex items-center justify-center shadow-[8px_0_0_rgba(96,165,250,0.4)]">
                  <img src="src/images/logo.png" alt="logo" className="w-8 h-8 object-contain" />
                </div>
                <h1 className="text-blue-400 text-2xl font-bold">Brand</h1>
              </>
            )}
          </div>

          <div className="flex gap-4 text-gray-500 text-lg">
            <i onClick={()=>{cart()}} className="fa-solid fa-cart-shopping" />
            <i className="fa-solid fa-user" />
          </div>
        </div>

        {/* Mobile Search */}
        <div className="relative w-full">
          <div className="flex rounded-md overflow-hidden border-2 border-blue-500">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowResults(false);
              }}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="flex-grow px-3 py-2 text-sm text-gray-700 focus:outline-none"
            />
            <select className="px-3 py-2 text-sm text-gray-700 border-l border-gray-300 focus:outline-none">
              <option>All category</option>
              <option>Books</option>
              <option>Electronics</option>
              <option>Clothing</option>
            </select>
            <button
              onClick={handleSearch}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm font-medium"
            >
              Search
            </button>
          </div>
          {renderSearchDropdown()}
        </div>

        {/* Mobile Category Pills */}
        <div className="flex overflow-x-auto gap-2 mt-1 pb-1">
          {['All category', 'Gadgets', 'Clothes', 'Accessories'].map((item, index) => (
            <button
              key={index}
              className="whitespace-nowrap px-3 py-1 border border-gray-300 rounded-full text-sm text-gray-600 bg-white"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:flex w-full h-[86px] items-center justify-between px-4 md:px-12 py-2">
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <div className="w-[44px] h-[44px] bg-blue-500 rounded-xl flex items-center justify-center shadow-[8px_0_0_rgba(96,165,250,0.4)]">
            <img src="src/images/logo.png" alt="logo" className="w-8 h-8 object-contain" />
          </div>
          <h1 className="text-blue-400 text-2xl md:text-4xl font-bold">Brand</h1>
        </div>

        {/* Desktop Search */}
        <div className="relative w-full max-w-xl">
          <div className="flex rounded-md overflow-hidden border-2 border-blue-500 mb-2 md:mb-0">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowResults(false);
              }}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="flex-grow px-4 py-2 text-sm text-gray-700 focus:outline-none"
            />
            <select className="px-4 py-2 text-sm text-gray-700 border-l border-gray-300 focus:outline-none">
              <option>All category</option>
              <option>Books</option>
              <option>Electronics</option>
              <option>Clothing</option>
            </select>
            <button
              onClick={handleSearch}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm font-medium"
            >
              Search
            </button>
          </div>
          {renderSearchDropdown()}
        </div>

        {/* Desktop Icons */}
        <div className='text-gray-500 flex gap-4 md:gap-7 text-lg md:text-xl'>
          <div className='flex flex-col items-center justify-center gap-1'>
            <i className="fa-solid fa-user"></i>
            <p className='text-[10px]'>Profile</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-1'>
            <i className="fa-solid fa-message"></i>
            <p className='text-[10px]'>Messages</p>
          </div>
          <div onClick={()=>cart()} className='flex flex-col items-center justify-center gap-1'>
            <i className="fa-solid fa-heart"></i>
            <p className='text-[10px]'>Orders</p>
          </div>
          <div onClick={()=>cart()} className='flex flex-col items-center justify-center gap-1'>
            <i className="fa-solid fa-cart-shopping"></i>
            <p className='text-[10px]'>Cart</p>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
