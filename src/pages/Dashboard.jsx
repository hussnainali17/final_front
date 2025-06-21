import React from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import {Link} from 'react-router-dom'
const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <div className=' p-10'>
            <div className='text-2xl gap-5 font-semibold flex justify-center items-center'>


                <button onClick={() => { setSidebarOpen(!sidebarOpen) }}><i className="fa-solid fa-bars text-xl text-gray-600" /></button>
                <h1 className=''>Dashboard For Admin</h1>
            </div>
            <div
                className={`bg-gray-100 shadow-lg w-64 fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:inset-0`}
            >
                <div className='flex justify-between p-4'>

                    <ul className='flex flex-col mt-4 gap-6 text-gray-600 font-semibold'>
                        <h3 className='text-lg font-semibold'>Operations</h3>
                        <li><Link to='/dashboard/product_add'>Add Products</Link></li>
                        <li><Link to='/dashboard/product_view'>View Products</Link></li>
                        
                    </ul>
                    <button className='h-7' onClick={() => { setSidebarOpen(false) }}><i className="bg-gray-300 text-black p-2 rounded-md fa-solid fa-xmark text-xl text-gray-600" /></button>
                </div>
                    

            </div>
            <div className='m-6'>
                <Outlet />
            </div>
            



        </div>
    )
}

export default Dashboard