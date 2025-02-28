import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './Components/layout/UserLayout'
import Home from './Pages/Home'
import { Toaster } from 'sonner'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Profile from './Pages/Profile'
import CollectionPage from './Pages/CollectionPage'
import ProductDetails from './Components/products/ProductDetails'
import Checkout from './Components/cart/Checkout'
import OrderDetailsPage from './Pages/OrderDetailsPage'
import MyOrdersPage from './Pages/MyOrdersPage'
import AdminLayout from './Components/admin/AdminLayout'
import AdminHomePage from './Pages/AdminHomePage'
import UserManagement from './Components/admin/UserManagement'
import ProductManagement from './Components/admin/ProductManagement'
import EditProduct from './Components/admin/EditProduct'
import OrderManagement from './Components/admin/OrderManagement'

import {Provider} from 'react-redux'
import store from './redux/store'
import ProtectedRoutes from './Components/common/ProtectedRoutes'

function App() {

  return (
    <Provider store={store}>
    <BrowserRouter>
    <Toaster position="top-right"/>
    <Routes>
      <Route path='/' element = {<UserLayout/>}>
      <Route index element = {<Home/>}/>
      <Route path='login' element = {<Login/>}/>
      <Route path='register' element = {<Register/>}/>
      <Route path='profile' element = {<Profile/>}/>
      <Route path='collections/:collection' element = {<CollectionPage/>}/>
      <Route path='product/:id' element = {<ProductDetails/>}/>
      <Route path='checkout' element = {<Checkout/>}/>
      <Route path='order/:id' element = {<OrderDetailsPage/>}/>
      <Route path='my-orders' element = {<MyOrdersPage/>}/>
      
      </Route>
        <Route path='/admin' element={
          <ProtectedRoutes role='admin'>
          <AdminLayout/>
          </ProtectedRoutes>
        }>
        <Route index element={<AdminHomePage/>}/>
        <Route path='users' element={<UserManagement/>}/>
        <Route path='products' element={<ProductManagement/>}/>
        <Route path='products/:id/edit' element={<EditProduct/>}/> 
        <Route path='orders' element={<OrderManagement/>}/>  
      </Route>
    </Routes>
    </BrowserRouter>
     
    </Provider>
  )
}

export default App
