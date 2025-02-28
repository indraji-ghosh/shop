import React from 'react'
import { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2';
import { setFilters } from '../../redux/slices/productSlice';
import { useDispatch } from 'react-redux';
import { fetchProductByFilters } from '../../redux/slices/productSlice';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSearchToggle = () => {
        setIsOpen(!isOpen)
    }
    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(setFilters({search : searchTerm}))
        dispatch(fetchProductByFilters({search: searchTerm}))
        navigate(`/collections/all?search=${searchTerm}`)
        setIsOpen(false)
    }
  return (
    <div className={`flex justify-center items-center w-full transition-all duration-300 ${isOpen? "absolute top-0 left-0 w-full h-24 bg-white z-50":" w-auto"}`}>
        {isOpen?
        (<form className='relative flex justify-center items-center w-full'>
            <div className='relative w-1/2'>
            <input type="text" placeholder='Search' onChange={(e)=>setSearchTerm(e.target.value)} value={searchTerm}
            className='bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full'/>
            <button type='submit' onClick={handleSearch} className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'>
                <HiMagnifyingGlass  className='h-6 w-6'/>
            </button>
            </div>
            

            <button type='button' className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'>
                <HiMiniXMark className='h-6 w-6' onClick={handleSearchToggle}/>
            </button>
        </form>):
            (<button onClick={handleSearchToggle} className='text-gray-700'>
                <HiMagnifyingGlass className='h-6 w-6'/>
                </button>)
        }
    </div>
  )
}

export default SearchBar