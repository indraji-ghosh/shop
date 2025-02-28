import React from 'react'
import {TbBrandMeta} from 'react-icons/tb'
import {IoLogoInstagram} from 'react-icons/io'
import {RiTwitterXLine} from 'react-icons/ri'
function Topbar() {
  return (
    <div className='bg-[#ea2e0e] text-white'>
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
            <div className='hidden md:flex items-center space-x-4'>
                <a href="#"className='hover:text-gray-700'>
                    <TbBrandMeta className='h-5 w-5'/>
                </a>
                <a href="#"className='hover:text-gray-700'>
                    <IoLogoInstagram className='h-5 w-5'/>
                </a>
                <a href="#"className='hover:text-gray-700'>
                    <RiTwitterXLine className='h-4 w-4'/>
                </a>
            </div>
            <div className='text-center text-sm flex-grow'>
                <span>We ship worldwide - Faster and Reliable Shipping</span>
            </div>
            <div className='hidden md:flex text-center text-sm hover:text-gray-700'>
                <span>+91-9382013904</span>
            </div>
        </div>
    </div>
  )
}

export default Topbar