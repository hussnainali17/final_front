import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ProductDataContext } from '../Context/ProductContext';


const Related = ({category="Related Product"}) => {

  
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
    <div className='w-full p-4 border border-gray-300 rounded-md mb-4  mx-auto h-[23vh] md:h-[55vh]'>

      <div className='text-lg font-semibold'>{category}</div>
      <div className='overflow-x-auto scrollbar-hide'>
      <div className='flex min-w-max'>
        {
          items.slice(11, 21).map((item,idx) => (
            <div onClick={()=>handleViewDetails(item)} key={idx} className=' flex gap-2 w-[20vh] md:w-[35vh] p-3 m-2 rounded-md border border-gray-300 flex-col items-center justify-center'>
              <div className=''><img src={item.images[0].url} className='h-20 object-contain mb-3' alt="" /></div>
              <div>
                <p className='text-gray-500 text-sm'>{item.title} </p>
                <p className='text-gray-400 text-[12px]'>{item.price}-{item.price + 10}$</p>
              </div>
            </div>
          ))
        }

      </div>
      </div>

    </div>
  )
}

export default Related