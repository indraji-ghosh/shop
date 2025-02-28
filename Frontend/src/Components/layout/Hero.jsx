import React from 'react'
import heroImg from '/bg.jpg'
import { Link } from 'react-router-dom'


function Hero() {
  return (
    <section className='relative'>
        <img src={heroImg} alt="" className='w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover' />
        <div className='absolute inset-0  flex items-center justify-center'>
            <div className='text-center text-white'>
            <h1 className='text-4xl md:text-9xl text-red-800 font-bold tracking-tighter uppercase mb-4'>Vacation <br /> ready</h1>
            <p className='text-sm tracking-tighter md:text-lg mb-6'>
                Explore our new collection of summer essentials
            </p>
            <Link to='/shop' className='bg-red-800 text-white px-6 py-3 text-sm rounded-md hover:bg-gray-200 transition-all'>Shop Now</Link>
            </div>
        </div>
    </section>
  )
}

export default Hero
