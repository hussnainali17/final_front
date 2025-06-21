import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Footer from '../components/footer'
import Lower from '../components/Lower'
import Side_bars from '../components/Pro_List/Side_bars'
import Nav_sec from '../components/Pro_List/nav_sec'
import Mid_Sec from '../components/Pro_List/Mid_Sec'
import Newletter from '../components/Newletter'
import { useLocation } from 'react-router-dom';
import Related from '../components/Related'
const Product_list = () => {

  const location = useLocation();
  
  const allProducts = location.state?.results || [];
  
  return (
    <div>
      <Header/>
      <NavBar/>
      <Nav_sec/>
      <div className='flex justify-around'>
        <Side_bars/>
        <Mid_Sec allProducts={allProducts} />
      </div>
      <Related/>
      <Newletter/>
      <Footer/>
      <Lower/>
    </div>
  )
}

export default Product_list