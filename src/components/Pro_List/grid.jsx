import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import { ProductDataContext } from '../../Context/ProductContext';
const Grid = ({ items }) => {
    const navigate = useNavigate();
    const { product, setProduct } = useContext(ProductDataContext);

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
    return (
        <div className="w-full">
            <div className='grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 gap-4 p-2 sm:p-6'>
                {items.map((item, idx) => (
                    <div key={item.id ? item.id + '-' + idx : idx} className='flex flex-col border border-gray-300 p-4 rounded-lg bg-white'>
                        <div className="flex justify-center">
                            <img src={item.images[0].url} alt={item.title} className='w-[100px] h-[100px] object-contain mb-2' />
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='flex gap-2 items-center'>
                                <p className='font-semibold'>{item.price}</p>
                                <p className='text-gray-300 line-through'>{item.price + 20}</p>
                            </div>
                            <p className='ml-2 text-amber-500'>⭐⭐⭐⭐⭐ <span className="text-gray-400">7.5</span></p>
                            <p className='text-black font-semibold  text-center'>{item.title}</p>
                            <button onClick={() => handleViewDetails(item)} className='mt-2 bg-blue-500 text-white py-1 px-2 rounded'>View Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Grid