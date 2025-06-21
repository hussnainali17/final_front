//import React from 'react'
import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

import { UserDataContext } from '../Context/UserContext';

const Signup = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [name, setname] = useState('')
  const navigate = useNavigate();
const { UCON, setUCON } = useContext(UserDataContext);

useEffect(() => {
  console.log('UCON updated:', UCON); // Log UCON after it's updated
}, [UCON]); // This effect runs whenever UCON changes

    const submitHandler = async (e) => {
        e.preventDefault();
        const user={
         name :name,
         email : email,
         password : password
        }
        
    // const response = await axios.post('http://localhost:4000/users/signup', user)

    // if (response.status === 201) {
    //   const data = response.data
    //   //setUser(data.user)
    //   localStorage.setItem('token', data.token)
    // //   navigate('/')
    // }
    try {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/signup`, user)

  if (response.status === 201) {
    const data = response.data
    localStorage.setItem('token', data.token)
   setUCON({ email: data.newUser.email, name: data.newUser.name, userId: data.newUser._id });
   localStorage.setItem('UCON', JSON.stringify({ email: data.newUser.email, name: data.newUser.name, userId: data.newUser._id }));
    //console.log(UCON); // Remove this line
    navigate('/')
  }
} catch (error) {
  console.error("Signup error:", error.response?.data || error.message)
}


    setEmail('')
    setname('')
    setPassword('')

    }

  return (
    <div className=' flex justify-center items-center h-screen'>
        <form onSubmit={(e)=>{submitHandler(e)}} className='border-2 border-gray-500 h-[40%] w-[80%] flex flex-col justify-center items-center gap-4 rounded-lg shadow-lg md:w-[30%] md:h-[60%]'>
            <p className='text-2xl font-semibold '>Signup</p>
            <input className='rounded-md p-2 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500' value={name} onChange={(e) => setname(e.target.value)} type="text" placeholder='Enter your Name'   />
            <input className='rounded-md p-2 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter your email'  />
            <input className='rounded-md p-2 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500' value={password} onChange={(e) => setPassword(e.target.value)} type="password"  placeholder='Enter your password' />
            <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded-md'>Sign Up</button>
            <p className='text-sm'>Already have an account? <a href="/login" className='text-blue-600'>Login</a></p>
        </form>
    </div>
  )
}

export default Signup