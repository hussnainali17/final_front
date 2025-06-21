import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import MiddleBar from '../components/middle_bar'
import Deals from '../components/Deals'
import Group from '../components/Group'
import Recommended from '../components/Recommended'
import Services from '../components/Services'
import Region from '../components/Region'
import Newletter from '../components/Newletter'
import Footer from '../components/footer'
import Lower from '../components/Lower'
import Related from '../components/Related';
import SideDeals from '../components/side_deals';
const Home = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchPublicProducts = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/admin/products`,{withCredentials:true});
        
        setProducts(res.data);
        
      } catch (err) {
        console.error(err);
      }
    };

    fetchPublicProducts();
  }, []);

const groupByCategory = (products) => {
  return products.reduce((acc, product) => {
    const cat = product.category || 'Uncategorized';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(product);
    return acc;
  }, {});
};

const groupedProducts = groupByCategory(products);


  return (
    <div>
        <Header/>
        <NavBar/>
        <MiddleBar/>
        <SideDeals/>
        
        {/* <Deals products={[groupedProducts['Home And Outdoor'],groupedProducts['Consumer electronics and gadgets']]} /> */}
        <Deals groupedProducts={groupedProducts} />
        <Group/>
        <Recommended/>
        <Services/>
        <Region/>
        <Newletter/>
        <Footer/>
        <Lower/>
    </div>
  )
}

export default Home