import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Product_list from './pages/Product_list.jsx'
import Product_detail from './pages/Product_detail.jsx'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/signup.jsx'
import Dashboard from './pages/Dashboard.jsx'
import UserProtectedWrapper from './components/UserProtectedWrapper.jsx'
import Addproduct from './components/admin/Addproduct.jsx'
import Update_product from './components/admin/Update_product.jsx'
import ProtectedAdminRoute from './components/AdminProtectedWrapper.jsx'
import View_product from './components/admin/View_product.jsx'
import UserContext from '../src/Context/UserContext.jsx'
import ProductContext from './Context/ProductContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
    <ProductContext>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Product_list' element={<Product_list/>}/>
      <Route path='/Product_detail' element={<Product_detail/>}/>
      <Route path='/cart' element={<UserProtectedWrapper><Cart/></UserProtectedWrapper>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/dashboard' element={<ProtectedAdminRoute><Dashboard/></ProtectedAdminRoute>}>
      <Route path='product_add' element={<ProtectedAdminRoute><Addproduct/></ProtectedAdminRoute>}/>
      <Route path='product_update/:id' element={<ProtectedAdminRoute><Update_product/></ProtectedAdminRoute>}/>
      <Route path='product_view' element={<ProtectedAdminRoute><View_product/></ProtectedAdminRoute>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </ProductContext>
    </UserContext>
  </StrictMode>,
)
