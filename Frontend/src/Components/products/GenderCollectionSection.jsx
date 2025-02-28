import React from 'react'
import mensCllectionImg from '../../assets/mens-collection.webp'
import womensCollectionImg from '../../assets/womens-collection.webp'
import { Link } from 'react-router-dom'
function GenderCollectionSection() {
  return (
    <section className='container w-9/10 mx-auto py-16 px-4 lg:px-0'>
        <div className='container mx-auto flex flex-col md:flex-row gap-8'>
            <div className='relative flex-1'>
               < img src={mensCllectionImg} alt="" className='w-full h-[700px] object-cover' />
               <div className='absolute bottom-8 left-8 p-4 bg-white bg-opacity-90'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3'>Men's Collection</h2>
                <Link to='/collections/all?gender=Men' className='text-gray-600 underline'>Shop Now</Link>
                </div>
            </div>
            <div className='relative flex-1'>
               < img src={womensCollectionImg} alt="" className='w-full h-[700px] object-cover' />
               <div className='absolute bottom-8 left-8 p-4 bg-white bg-opacity-90'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3'>Women's Collection</h2>
                <Link to='/collections/all?gender=Women' className='text-gray-600 underline'>Shop Now</Link>
                </div>
            </div>
        </div>

    </section>
  )
}

export default GenderCollectionSection