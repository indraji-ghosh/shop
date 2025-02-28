import React, { useState,useEffect,useRef } from 'react'
import {FaFilter} from 'react-icons/fa'
import FilterSidebar from '../Components/products/FilterSidebar';
import SortOptions from '../Components/products/SortOptions';
import ProductGrid from '../Components/products/ProductGrid';
import { fetchProductByFilters } from '../redux/slices/productSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';





function CollectionPage() {
  const {collection} = useParams()
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()
  const {products, loading, error} = useSelector((state) => state.products)
  const queryParams = Object.fromEntries([...searchParams]); 


  const sidebarRef = useRef(null)
  const [isSidebarOpen, setIssidebarOpen] = useState(false)

useEffect(() => {
  dispatch(fetchProductByFilters({collection, ...queryParams}))
}, [dispatch, searchParams, collection])

  const toggleSidebar = () =>{
    setIssidebarOpen(!isSidebarOpen)
  }
  const handleClickOutside = (e) =>{
    if(sidebarRef.current && !sidebarRef.current.contains(e.target)){
      setIssidebarOpen(false)
    }
  }
  useEffect(()=>{
    document.addEventListener("mousedown", handleClickOutside)
    
    return () =>{
      document.removeEventListener("mousedown", handleClickOutside)
    }
  },[])
  
  return (
    <div className="flex flex-col lg:flex-row">
      {/* mobile filter button */}
      <button onClick={toggleSidebar} className="lg:hidden border p-2 flex justify-center item-center">
        <FaFilter className='mr-2'/> Filters
      </button>
      {/* filter sidebar */}
      <div ref={sidebarRef} className={`${isSidebarOpen?"translate-x-0":"-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
        <FilterSidebar/> 
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All collection</h2>
        {/* sort options */}
        <SortOptions/>

        {/* product grid */}
        <ProductGrid products={products} loading={loading} error={error}/>
      </div>
    </div>
  )
}

export default CollectionPage