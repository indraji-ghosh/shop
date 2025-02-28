import React from 'react'
import { Link } from 'react-router-dom'
import { TbBrandMeta } from 'react-icons/tb';
import {IoLogoInstagram } from 'react-icons/io';
import { RiTwitterXLine } from 'react-icons/ri';
import { FiPhoneCall } from 'react-icons/fi';

function Footer() {
  return (
    <footer className='border-t border-gray-200 py-12'>
        <div className="container w-9/10 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 py-6 lg:px-0">
            <div>
                <h3 className='text-lg text-gray-800 mb-4'>NewsLetter</h3>
                <p className='text-gray-800 mb-4'>
                    Subscribe to our newsletter to get the latest updates
                </p>
                <p className='font-bold text-gray-600  text-sm mb-6'>SignUp and get 10% off on your first Order</p>

                <form className='flex'>
                    <input type="email" className=' text-sm border-t border-l border-b border-gray-300 p-3 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all' required placeholder='Enter your email'/>
                    <button className='bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800  transition-all'>Subscribe</button>
                </form>
            </div>
            <div>
                <h3 className='text-lg text-gray-800 mb-4'>Shop</h3>
                <ul className='space-y-2 text-gray-600'>
                    <li className='hover:text-gray-500 transition-colors'>
                        <Link to='#'>Mens Top wear</Link>
                    </li>
                    <li className='hover:text-gray-500 transition-colors'>
                        <Link to='#'>Womens Top wear</Link>
                    </li>
                    <li className='hover:text-gray-500 transition-colors'>
                        <Link to='#'>Mens Bottom wear</Link>
                    </li>
                    <li className='hover:text-gray-500 transition-colors'>
                        <Link to='#'>Womens Bottom wear</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className='text-lg text-gray-800 mb-4'>Support</h3>
                <ul className='space-y-2 text-gray-600'>
                    <li className='hover:text-gray-500 transition-colors'>
                        <Link to='#'>Contact Us</Link>
                    </li>
                    <li className='hover:text-gray-500 transition-colors'>
                        <Link to='#'>About Us</Link>
                    </li>
                    <li className='hover:text-gray-500 transition-colors'>
                        <Link to='#'>FAQ</Link>
                    </li>
                    <li className='hover:text-gray-500 transition-colors'>
                        <Link to='#'>Feature</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
                <div className="flex items-center space-x-4 mb-6">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <TbBrandMeta className='h-5 w-5'/>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <IoLogoInstagram className='h-5 w-5'/>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <RiTwitterXLine className='h-5 w-5'/>
                </a>
            </div>
            <p className='text-gray-500'>Call Us</p>
            <p>
                <FiPhoneCall className='h-5 w-5 inline-block mr-2'/>
                +91 1234567890
            </p>
            </div>
        </div>
        <div className='container max-w-7xl mx-auto px-4 lg:px-0 border-t border-gray-300 pt-6'>
            
            <p className='text-center text-gray-500 tracking-tighter text-sm mt-8'>
                &copy; 2021 All Rights Reserved. Designed by <span className='text-gray-800 font-bold'>Shop</span>
            </p>
        </div>
    </footer>
  )
}

export default Footer