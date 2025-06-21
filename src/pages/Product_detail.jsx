import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Footer from '../components/footer'
import Lower from '../components/Lower'
import Nav_sec from '../components/Pro_List/nav_sec'
//import Detail from '../components/Pro_Detail/Detail'
import Description from '../components/Pro_Detail/Description'
import Banner from '../components/Pro_Detail/Banner'
import Related from '../components/Related'
import Detail from '../components/Pro_Detail/Detail'


const Product_detail = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Nav_sec/>
      <Detail/>
      <Description/>
      <Related/>
      <Banner/>
      <Footer/>
      <Lower/>
    </div>
  )
}

export default Product_detail