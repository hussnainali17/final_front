import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { ProductDataContext } from '../Context/ProductContext';
import { useNavigate } from 'react-router-dom';

const SideDeals = () => {

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
    <div className='w-full p-2 pb-2 border md:flex  border-gray-300 rounded-md mb-10  mx-auto h-[25vh] md:h-[50vh]'>

      <div className=' p-6  w-[400px] hidden md:block'>
      <div className='font-semibold'>Deals And Offers</div>
      <div className='text-gray-400'>Hygiene equipments</div>

      <div className='flex mt-5 text-white text-[12px] gap-2'>
        <div className='bg-gray-600  rounded-md h-[45px] w-[45px] flex justify-center items-center flex-col'>
          <p className='font-bold'>04</p>
          <p>Days</p>
        </div>
        <div className='bg-gray-600 rounded-md h-[45px] w-[45px] flex justify-center items-center flex-col'>
          <p className='font-bold'>13</p>
          <p>Hour</p>
        </div>
        <div className='bg-gray-600 rounded-md h-[45px] w-[45px] flex justify-center items-center flex-col'>
          <p className='font-bold'>34</p>
          <p>Min</p>
        </div>
        <div className='bg-gray-600 rounded-md h-[45px] w-[45px] flex justify-center items-center flex-col'>
          <p className='font-bold'>56</p>
          <p>Sec</p>
        </div>
      </div>

      </div>
      <div className='text-lg font-semibold md:hidden'>Deals And Offers</div>
      <div className='overflow-x-auto scrollbar-hide'>
      <div className='flex min-w-max md:h-full'>
        {
          items.slice(11, 21).map((item,idx) => (
            <div key={idx} onClick={()=>handleViewDetails(item)} className=' flex gap-2 w-[20vh] md:w-[35vh] p-3 border-l  border-gray-300   flex-col md:h-full items-center justify-center'>
              <div className=''><img src={item.images[0].url} className='h-20 object-contain mb-3' alt="" /></div>
              <div className='flex flex-col gap-1 justify-center items-center'>
                <p className='text-gray-500 text-sm'>{item.title} </p>
                <p className='text-red-500 p-1 text-center w-[62px] bg-red-200 rounded-3xl text-[12px]'>-25%</p>
              </div>
            </div>
          ))
        }

      </div>
      </div>

    </div>
  )
}

export default SideDeals