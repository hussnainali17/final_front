import React from 'react'
import { useContext } from 'react'
import { ProductDataContext } from '../../Context/ProductContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Items = ({items}) => {
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

    return (
        <div className='flex flex-col w-full'>
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className='flex flex-row items-center  border rounded-2xl border-gray-300 m-2 p-3 sm:m-5 sm:p-6 md:space-x-4 space-x-2 bg-white'
                >
                    <div className='w-[100px] h-[100px] flex-shrink-0 flex items-center justify-center'>
                        <img src={item.images[0].url} alt={item.title} className="w-full h-full object-contain" />
                    </div>
                    <div className='flex flex-col gap-1 p-2 text-sm flex-1'>
                        <p className='font-semibold text-[15px] sm:text-base'>{item.title}</p>
                        <div className='flex gap-2 items-center'>
                            <p className='text-[15px] sm:text-base font-semibold'>{item.price}</p>
                            <p className='text-gray-300 line-through text-xs sm:text-sm'>{item.price + 20}</p>
                        </div>
                        <p className='text-amber-500 text-xs sm:text-sm'>⭐⭐⭐⭐⭐ <span className="text-gray-400">7.5</span></p>
                        {/* Hide description and view details on mobile */}
                        <p className='text-gray-500 text-[13px] hidden sm:block'>
                            {item.description.split('tempor').map((part, i, arr) =>
                                i < arr.length - 1
                                    ? <>{part}tempor<br /></>
                                    : part
                            )}
                        </p>
                        <p className='text-blue-500 hidden sm:block' onClick={() => handleViewDetails(item)}>View Details</p>
                        <button onClick={() => handleViewDetails(item)} className='mt-1 mr-28  bg-blue-500 text-white py-1 px-2 rounded md:hidden'>View Details</button>
                    </div>
                    {/* Hide heart icon on mobile */}
                    <i className="fa-regular fa-heart border-1 border-gray-300 p-2 h-8 rounded-md text-blue-600 hidden sm:inline-block"></i>
                </div>
            ))}
        </div>
    )
}

export default Items