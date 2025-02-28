import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

function FilterSidebar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()
  const [filters,setFilters] = useState({
    category:"",
    gender:"",
    color:"",
    size:[],
    material:[],
    brand:[],
    minPrice:0,
    maxPrice:100,
    search: "",
    })

    const [priceRange, setPriceRange] = useState([0,100])
    const categories = ["Top Wear", "Bottom Wear"]
    const colors = [
      "Red",
      "Green",
      "Black",
      "Yellow",
      "Pink",
      "white",
      "Beige",
      "Navy"
    ]
    const sizes = ["XS","S","M","L","XL","XXL"]
    const materials = [
      "Cotton",
      "Wool",
      "Denim",
      "Polyester",
      "Silk",
      "Linen",
      "Viscose",
      "Fleece"
    ]
    const brands = [
      "Urban Style",
      "Modern fit",
      "Beach",
      "FashionInsta",
      "ChicStyle"
    ]
    const genders = ["Men","Women"]
    useEffect(()=>{
      const params = Object.fromEntries([...searchParams])
      setFilters({
        category: params.category || "",
        gender: params.gender || "",
        color: params.color || "",
        size: params.size? params.size.split(",") : [],
        brand: params.brand? params.brand.split(",") : [],
        material: params.material ? params.material.split(",") : [],
        minPrice: params.minPrice || 0,
        maxPrice: params.maxPrice || 0,

      })
      setPriceRange([0,params.maxPrice || 100])
    },[searchParams])


    const handleFilterChange = (e) =>{
      const {name, value, checked, type} = e.target
      let newFilters = { ...filters }

      if(type=="checkbox"){
        if(checked){
          newFilters[name] = [...(newFilters[name] || []), value]
        }
        else{
          newFilters[name] = newFilters[name].filter((item)=>item !== value)
        }
      }
      else{
        newFilters[name]= value
      }
      setFilters(newFilters)
      updateURLParams(newFilters)
      console.log(newFilters)

    }
    const updateURLParams = (newFilters) =>{
      const params = new URLSearchParams()
      Object.keys(newFilters).forEach((key)=>{
        if(Array.isArray(newFilters[key]) && newFilters[key].length>0){
          params.set(key, newFilters[key].join(","))
        }
        else if(newFilters[key]){
          params.set(key, newFilters[key])
        }
      })
      setSearchParams(params)
      navigate(`?${params.toString()}`)
    }

    const handlePriceChange = (e) =>{
      let newPrice = e.target.value
      setPriceRange([0,newPrice])
      const newFilters = { ...filters, minPrice: 0, maxPrice: newPrice };
      setFilters(newFilters);
      updateURLParams(newFilters)
    }
  return (
    <div className='p-4'>
      <h3 className='text-xl font-medium text-gray-800 mb-4 '>Filter</h3>
      {/* category filter */}
      <div className="mb-6">
        <label className="block font-medium mb-2 text-gray-600">Category</label>
        {
          categories.map((category)=>(
            <div key={category} className='flex items-center mb-1'>
              <input type='radio'
              value={category}
              checked={filters.category == category}
              onChange={handleFilterChange}
              name="category" className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 '/>
              <span className='text-gray-600'>{category}</span>
            </div>
          ))
        }
      </div>
      {/* gender filter */}
      <div className="mb-6">
        <label className="block font-medium mb-2 text-gray-600">Gender</label>
        {
          genders.map((gender)=>(
            <div key={gender} className='flex items-center mb-1'>
              <input 
              value={gender}
              checked={filters.gender == gender}
              onChange={handleFilterChange}
              type='radio' name="gender" className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 '/>
              <span className='text-gray-600'>{gender}</span>
            </div>
          ))
        }
      </div>

      {/* color filter */}
      <div className="mb-6">
        <label className="block font-medium mb-2 text-gray-600">Color</label>
        <div className="flex flex-wrap gap-2">
        {
          colors.map((color)=>(
            <button 
            key={color}
            value={color}
            
            name='color'
              onClick={handleFilterChange}
            className={`w-8 h-8 rounded-full border border-gray-700 cursor-pointer transition 
            hover:scale-105 ${filters.color == color? "ring-2 ring-blue-500":""}`}  style={{backgroundColor: color.toLowerCase()}}></button>
          ))
        }
        </div>
      </div>
      

       {/* size filter */}
       <div className="mb-6">
        <label className="block font-medium mb-2 text-gray-600">Size</label>
        {
          sizes.map((size)=>(
            <div key={size} className="flex item-center mb-1">
              <input 
              value={size}
              checked={filters.size.includes(size)}
              onChange={handleFilterChange}
              type="checkbox" name="size" className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300" />
              <span className="text-gray-700">{size}</span>
            </div>
          ))
        }
      </div>

      {/* material filter */}
      <div className="mb-6">
        <label className="block font-medium mb-2 text-gray-600">Material</label>
        {
          materials.map((material)=>(
            <div key={material} className="flex item-center mb-1">
              <input 
              value={material}
              checked={filters.material.includes(material)}
              onChange={handleFilterChange}
              type="checkbox" name="material" className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300" />
              <span className="text-gray-700">{material}</span>
            </div>
          ))
        }
      </div>

      {/* brand filter */}
      <div className="mb-6">
        <label className="block font-medium mb-2 text-gray-600">Brand</label>
        {
          brands.map((brand)=>(
            <div key={brand} className="flex item-center mb-1">
              <input 
              value={brand}
              checked={filters.brand.includes(brand)}
              onChange={handleFilterChange}
              type="checkbox" name="brand" className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300" />
              <span className="text-gray-700">{brand}</span>
            </div>
          ))
        }
      </div>

      {/* price range filter */}
      <div className="mb-6">
        <label className="block font-medium mb-2 text-gray-600">Price Range</label>
        <input type="range"  name='priceRange' min={0} max={100} value={priceRange[1]} onChange={handlePriceChange}
        className='w-full bg-gray-300 rounded-lg apperance-none cursor-pointer ' />
        <div className="flex justify-between mt-2">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
        
      </div>

    </div>
  )
}

export default FilterSidebar