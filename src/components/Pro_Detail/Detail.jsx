import React, { useContext, useEffect, useState } from 'react';
import { ProductDataContext } from '../../Context/ProductContext';
import { UserDataContext } from '../../Context/UserContext';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Detail = () => {
  const { product, setProduct } = useContext(ProductDataContext);
  const { UCON, setUCON } = useContext(UserDataContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Load user from localStorage
    const storedUser = localStorage.getItem('UCON');
    if (storedUser) {
      setUCON(JSON.parse(storedUser));
    }

    // Load product from localStorage
    const storedProduct = localStorage.getItem('productDetails');
    if (storedProduct) {
      setProduct(JSON.parse(storedProduct));
    }

    // Simulate loading time
    setTimeout(() => setLoading(false), 500); // Optional delay
  }, []);

  if (loading || !product || !product.images || product.images.length === 0) {
    return <div className="p-5 text-red-500">Loading product...</div>;
  }

  const handleAddToCart = async () => {
    try {
      if (!UCON || !UCON.userId) {
        navigate('/login');
      }
      //console.log(UCON.userId,product._id);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/cart/add`,
        {
          items: [{ productId: product._id, quantity: 1 }],
          userId: UCON.userId,
        },
        { withCredentials: true }
      );
      navigate('/cart'); // Navigate to cart after adding product
      
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <div className='flex flex-col md:flex-row p-4 border border-gray-300 m-2 md:m-8'>
      {/* Image Section */}
      <div className='space-y-4 w-full md:w-1/3'>
        <div className='h-[200px] md:h-[300px] w-full flex flex-col border border-gray-300 rounded-lg bg-white'>
          <img src={product.images[0].url} alt={product.title} className="object-contain h-full w-full" />
        </div>

        <div className='flex justify-between'>
          {[...Array(6)].map((_, i) => (
            <img key={i} src={product.images[0].url} alt={product.title} className='h-[30px] w-[30px] md:h-[40px] md:w-[40px] border border-gray-300 object-cover' />
          ))}
        </div>
         <button className='bg-blue-500 text-white py-2 px-4 rounded-md w-full hidden md:block' onClick={handleAddToCart}>Add To Cart</button>

        
      </div>

      {/* Details Section */}
      <div className='flex flex-col ml-0 md:ml-4 space-y-4 w-full md:w-1/3'>
        <p className='text-green-500'>✓ In Stock</p>
        <p className='text-xl font-semibold'>{product.title}</p>
        <div className='flex gap-5'>
          <p>⭐⭐⭐⭐⭐ 9.3</p>
          <p className='text-gray-500 flex justify-center gap-3 items-center'><i className="fa-solid fa-message"></i>32 Reviews  <i className="fa-solid fa-bucket"></i>154 Sold</p>
        </div>
        <div className='flex justify-between text-[12px] p-2 bg-orange-200'>
          <div className='flex flex-col pr-4 border-r border-r-gray-400'>
            <p className='text-red-600 '>{product.price}$</p>
            <p className='text-gray-500'>{product.stock - 20} - {product.stock} Pcs</p>
          </div>
          <div className='flex flex-col pr-2 border-r border-r-gray-400'>
            <p>{product.price - 2} - {product.price}$</p>
            <p className='text-gray-500'>{product.stock - 10} - {product.stock} Pcs</p>
          </div>
          <div className='flex flex-col'>
            <p>{product.price - 5} - {product.price + 5}$</p>
            <p className='text-gray-500'>{product.stock - 5} - {product.stock} Pcs</p>
          </div>
        </div>

        <div className='flex gap-8 pb-1 text-[12px] border-b border-b-gray-400'>
          <p className='text-gray-400'>Price:</p>
          <p className='text-gray-700'>Negotiable</p>
        </div>

        <div className='flex gap-8 pb-3 text-[12px] border-b border-b-gray-400'>
          <div className='space-y-2'>
            <p className='text-gray-400'>Price:</p>
            <p className='text-gray-400'>Material:</p>
            <p className='text-gray-400'>Design:</p>
          </div>
          <div className='space-y-2'>
            <p className='text-gray-700'>Classic Shoes</p>
            <p className='text-gray-700'>Plastic Material</p>
            <p className='text-gray-700'>Modern Design</p>
          </div>
        </div>

        <div className='flex gap-8 pb-3 text-[12px] border-b border-b-gray-400'>
          <div className='space-y-2'>
            <p className='text-gray-400'>Price:</p>
            <p className='text-gray-400'>Material:</p>
            <p className='text-gray-400'>Design:</p>
          </div>
          <div className='space-y-2'>
            <p className='text-gray-700'>Classic Shoes</p>
            <p className='text-gray-700'>Plastic Material</p>
            <p className='text-gray-700'>Modern Design</p>
          </div>
        </div>
      </div>

      <button className='bg-blue-500 text-white py-2 px-4 rounded md:hidden' onClick={handleAddToCart}>Add To Cart</button>

      {/* Supplier Section */}
      <div className='flex flex-col border border-gray-300 p-5 rounded-md m-0 md:m-4 w-full md:w-1/3'>
        <div className='flex justify-center items-center gap-2 p-3 border-b border-b-gray-300'>
          <img src="https://i.postimg.cc/nzpvKT8L/Avatar.png" alt="" className='h-[40px] w-[40px] object-cover' />
          <div className='flex flex-col'>
            <p>Supplier</p>
            <p>Guanjoi Trading LLC</p>
          </div>
        </div>

        <div className='flex flex-col p-3 gap-3'>
          <div className='flex gap-5 items-center'>
            <img src="https://i.postimg.cc/XYZf8ppT/icon-4.png" className='h-[15px] w-[20px]' alt="" />
            <p>Germany</p>
          </div>
          <div className='flex gap-5 items-center'>
            <i className="fa-solid fa-globe"></i>
            <p>Verified Seller</p>
          </div>
          <div className='flex gap-5 items-center'>
            <i className="fa-solid fa-globe"></i>
            <p>World wide Shipping</p>
          </div>
        </div>

        <div className='flex flex-col'>
          <button className='p-2 mt-2 bg-blue-500 text-sm text-white rounded-md'>Send Inquiry</button>
          <button className='p-2 mt-2 bg-white text-sm text-blue-600 border border-gray-400 rounded-md'>Seller Profile</button>
          <div className='flex justify-center items-center text-sm gap-2 p-2 mt-2 text-blue-600'>
            <i className="fa-solid fa-heart"></i>
            <p>Save for Later</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
