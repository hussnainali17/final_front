import React, { useContext } from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { ProductDataContext } from '../Context/ProductContext';
 
const Recommended = () => {


  const { Product, setProduct } = useContext(ProductDataContext);
      const navigate = useNavigate();
      const handleViewDetails = async (item) => {
          try {
             
              const res = await axios.get(`${import.meta.env.VITE_API_URL}/admin/product/${item._id}`, { withCredentials: true });
              localStorage.setItem('productDetails', JSON.stringify(res.data)); 
              setProduct({
                  id: res.data._id,
                  title: res.data.title,
                  price: res.data.price,
                  stock: res.data.stock,
                  description: res.data.description,
                  images: res.data.images,
                  category: res.data.category,
              });
              navigate('/product_detail'); // Navigate to the product details page
          } catch (error) {
              console.error('Error fetching product details:', error);
              // Handle error (e.g., display an error message)
          }
      };
  const [items, setitems] = useState([]);

  useEffect(() => {
    const fetchPublicProducts = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/admin/products`,{withCredentials:true});
        setitems(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPublicProducts();
  }, []);


  return (
    <div className='w-full max-w-[1100px] mx-auto mt-2 rounded-lg p-3'>
      <p className='font-semibold text-xl'>Recommended Items</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-3'>
        {items.slice(0, 10).map(item => (
          <div onClick={()=>{handleViewDetails(item)}} key={item._id} className='border border-gray-300 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
            <img src={item.images[0].url} alt={item.title} className='w-full h-32 object-cover mb-2 rounded-md' />
            <h3 className='text-lg font-semibold'>{item.price}$</h3>
            <p className='text-gray-600'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recommended