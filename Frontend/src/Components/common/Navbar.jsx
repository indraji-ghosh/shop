import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineShoppingBag, HiOutlineUser, HiBars3BottomRight } from "react-icons/hi2";
import { GiShoppingCart } from "react-icons/gi";
import SearchBar from './SearchBar';
import CartDrawer from './CartDrawer';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useSelector } from 'react-redux';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [navDrawerOpen, setNavDrawerOpen] = useState(false)
  const {cart} = useSelector((state) => state.cart)
  const {user} = useSelector((state) => state.auth)

  const cartItemCount = cart?.products?.reduce((total, product) => total + product.quantity, 0) || 0

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen)
  }
    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }
  return (
    <>
    <nav className='container mx-auto flex justify-between items-center py-4 px-6'>
      <div>
        <Link to='/' className='font-medium text-2xl flex'>
        <GiShoppingCart className='h-8 w-8 text-gray-700'/>
        <span>Shop</span></Link>
      </div>
      <div className='hidden md:flex text-sm space-x-6'>
      <Link to='/collections/all?gender=Men' className='font-sm hover:text-gray-700 text-black uppercase'>Men</Link>
      <Link to='/collections/all?gender=Women' className='font-sm hover:text-gray-700 text-black uppercase'>Women</Link>
      <Link to='/collections/all?category=Top Wear' className='font-sm hover:text-gray-700 text-black uppercase'>Top wear</Link>
      <Link to='/collections/all?category=Bottom Wear' className='font-sm hover:text-gray-700 text-black uppercase'>Bottom wear</Link>

      </div>

      <div className='flex items-center space-x-4'>
        {user && user.role === "admin" && ( <Link to='/admin' className="block bg-black text-white px-2 rounded text-sm">Admin</Link>)}
     
        <Link to='/profile' className='font-sm text-gray-700 hover:text-black uppercase'>
        <HiOutlineUser className='h-6 w-6 text-gray-700'/>
        </Link>
      <button onClick={toggleCartDrawer} className='relative text-black'>
      <HiOutlineShoppingBag className='h-6 w-6 text-gray-700'/>
      {cartItemCount > 0 && (<span className='absolute -top-1 bg-red-500 text-xs rounded-full  px-2 py-0.5 text-white'>{cartItemCount}</span>)}
      <span className='absolute -top-1 bg-red-500 text-xs rounded-full  px-2 py-0.5 text-white'>{cartItemCount}</span>
      </button>

      <SearchBar/>
      <button onClick={toggleNavDrawer} className='md:hidden'>
        <HiBars3BottomRight className='h-6 w-6 text-gray-700'/>
      </button>
      </div>
    </nav>
    <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>

    <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen?"translate-x-0":"-translate-x-full"}`}>
    <div className="flex justify-end p-4">
      <button onClick={toggleNavDrawer}>
        <IoMdClose className='h-6 w-6 text-gray-600'/>
      </button>
    </div>
    <div className="p-4">
      <h2 className='text-xl font-semibold mb-4'>Menu</h2>
      <nav>
        <Link to='#' className='block py-2 text-gray-700 hover:text-black'>Men</Link>
        <Link to='#' className='block py-2 text-gray-700 hover:text-black'>Women</Link>
        <Link to='#' className='block py-2 text-gray-700 hover:text-black'>Top Wear</Link>
        <Link to='#' className='block py-2 text-gray-700 hover:text-black'>Bottom Wear</Link>
      </nav>
    </div>
    </div>
    </>
  )
}

export default Navbar