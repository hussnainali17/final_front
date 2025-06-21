import React, { useState , useEffect } from 'react'
import Items from './Items'
import Grid from './grid'
import axios from 'axios';



const Mid_Sec = ({allProducts}) => {
    const [isGrid, setisGrid] = useState(false);
    // const [products, setProducts] = useState([]);

   

//   useEffect(() => {
//     const fetchPublicProducts = async () => {
//       try {
//         const res = await axios.get('http://localhost:4000/admin/products',{withCredentials:true});
        
//         setProducts(res.data);
        
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchPublicProducts();
//   }, []);




    return (
        <div className="w-full">
            <div className='mt-4 mx-auto w-full max-w-2xl flex flex-col sm:flex-row justify-between items-center rounded-md border-1 border-gray-300 px-3 py-2 gap-2'>
                <div className='flex items-center gap-2'>
                    <p className='text-xs sm:text-base'>12,000 Items in</p>
                    <p className='font-semibold text-xs sm:text-base'>Mobile Industry</p>
                </div>
                <div className='flex flex-wrap items-center gap-2'>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" name="12" id="12" />
                        <label htmlFor="12" className='text-[12px]'>Verified Only</label>
                    </div>
                    <div className='border-1 border-gray-300 p-1 rounded text-sm'>
                        <select name="" id="" className="text-xs sm:text-sm">
                            <option value="">Featured</option>
                            <option value="">Featured</option>
                            <option value="">Featured</option>
                        </select>
                    </div>
                    <div className='flex gap-2'>
                        <button
                            className={`h-8 w-8 border-1 border-gray-300 flex justify-center items-center rounded ${!isGrid ? 'bg-blue-100' : ''}`}
                            onClick={() => setisGrid(false)}
                        >
                            <i className="fa-solid fa-bars"></i>
                        </button>
                        <button
                            className={`h-8 w-8 border-1 border-gray-300 flex justify-center items-center rounded ${isGrid ? 'bg-blue-100' : ''}`}
                            onClick={() => setisGrid(true)}
                        >
                            <i className="fas fa-th"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full">
                {isGrid ? <Grid items={allProducts} /> : <Items items={allProducts} />}
            </div>
        </div>
    )
}

export default Mid_Sec