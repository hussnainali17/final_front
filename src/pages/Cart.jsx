import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Footer from '../components/footer'
import Lower from '../components/Lower'
import Newletter from '../components/Newletter'
import Pro_Cart from '../components/Cart/Pro_Cart'
import Cart2 from '../components/Cart/Cart2'
import Related from '../components/Related'
import Banner from '../components/Pro_Detail/Banner'

const Cart = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
      {/* <div className='flex justify-around'>
      <Pro_Cart/>
      <Cart2/>
      </div> */}
       <div className="w-full flex flex-col md:flex-row md:items-start gap-4 px-2 md:px-10 py-6">
      
      {/* Product Cart */}
      <div className="md:w-[80%] w-full">
        <Pro_Cart />
        
        {/* Mobile view: show Cart2 below product list */}
        <div className="block md:hidden mt-4">
          <Cart2 />
        </div>
      </div>

      {/* Desktop view: show Cart2 on the right */}
      <div className="hidden md:block md:w-[30%]">
        <Cart2 />
      </div>
    </div>
        <div className='md:hidden'>
          <Related/>
        </div>
      <Banner/>
      <Newletter/>
      <Footer/>
      <Lower/>
    </div>
  )
}

export default Cart