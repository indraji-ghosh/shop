import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { fetchProductDetails, updateProduct } from '../../redux/slices/productSlice'


function EditProduct() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {id} = useParams()
    const {selectedProduct, loading, error} = useSelector((state)=>state.products)


    const [productData, setProductData] =useState({
        name:"",
        description:"",
        price:0,
        countInStock:0,
        sku:"",
        category:"",
        brand:"",
        sizes:[],
        colors:[],
        collection:"",
        material:"",
        gender:"",
        images:[
            {
                url:"https://picsum.photos/150?random=1"
            },
            {
                url:"https://picsum.photos/150?random=1"
            },
            {
                url:"https://picsum.photos/150?random=1"
            }
        ]
    })

    const [uploading, setUploading] = useState(false)
    useEffect(() => {
        if(id){
            dispatch(fetchProductDetails(id))
        }
    }, [dispatch, id])

    useEffect(() => {
        if(selectedProduct){
            setProductData(selectedProduct)
        }
    }, [selectedProduct])



    const handleChange = (e) =>{
        const {name, value} = e.target
        setProductData((prevdata)=>({...prevdata, [name]:value}))

    }

    const handleImage = async (e)=>{
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        try {
           setUploading(true)
           const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/upload`, formData, {
                headers:{
                     'Content-Type':'multipart/form-data'
                }
              })
              setProductData(
                (prevData)=> ({
                    ...prevData,
                    images: [...prevData.images, {url:data.url, alt:data.alt} ]
                })
              )
              setUploading(false)
        } catch (error) {
            console.error(error);
            setUploading(false)
            
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(updateProduct({id, productData}))
        navigate("/admin/products")
        
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
        <h2 className="text-3xl font-bold mb-6">Edit Page</h2>
        <form onSubmit={handleSubmit}>
            {/* name */}
            <div className="mb-6">
                <label className="block font-semibold mb-2">Product Name</label>
                <input type="text" name='name' value={productData.name} onChange={handleChange} className='w-full border border-gray-300 rounded-md p-2' required/>
            </div>
             {/* description */}
             <div className="mb-6">
                <label className="block font-semibold mb-2">Description</label>
                <textarea name='description'  value={productData.description} onChange={handleChange} className='w-full border border-gray-300 rounded-md p-2' rows={4} required/>
            </div>
             {/* price */}
             <div className="mb-6">
                <label className="block font-semibold mb-2">Price</label>
                <input name='price' type='number' value={productData.price} onChange={handleChange} className='w-full border border-gray-300 rounded-md p-2' rows={4} required/>
            </div>
            {/* Count In stock */}
            <div className="mb-6">
                <label className="block font-semibold mb-2">Count In Stock</label>
                <input name='countInStock' type='number' value={productData.countInStock} onChange={handleChange} className='w-full border border-gray-300 rounded-md p-2' required/>
            </div>
             {/* SKU */}
             <div className="mb-6">
                <label className="block font-semibold mb-2">SKU</label>
                <input name='sku' type='text' value={productData.sku} onChange={handleChange} className='w-full border border-gray-300 rounded-md p-2'required/>
            </div>
            {/* Sizes comma seperated */}
            <div className="mb-6">
                <label className="block font-semibold mb-2">Sizes (comma-seperated)</label>
                <input name='sizes' type='text' value={productData.sizes.join(",")} onChange={(e)=>setProductData({...productData,sizes: e.target.value.split(",").map((size)=>size.trim())})} className='w-full border border-gray-300 rounded-md p-2' required/>
            </div>
            {/* colors comma seperated */}
            <div className="mb-6">
                <label className="block font-semibold mb-2">Colors (comma-seperated)</label>
                <input name='colors' type='text' value={productData.colors.join(",")} onChange={(e)=>setProductData({...productData,colors: e.target.value.split(",").map((color)=>color.trim())})} className='w-full border border-gray-300 rounded-md p-2' required/>
            </div>
             {/* image upload */}
             <div className="mb-6">
                <label className="block font-semibold mb-2">Upload Image</label>
                <input type='file' onChange={handleImage} required/>
                {uploading && <p>Uploading..</p>}
                <div className="flex gap-4 mt-4">
                    {productData.images.map((image,index)=>(
                        <div key={index}>
                            <img src={image.url} alt={image.alt | "product Image"} className="h-20 w-20 object-cover rounded-md shadow-md " />
                        </div>
                    ))}
                </div>
            </div>
            <button className='w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 '>Update Product</button>
        </form>
    </div>
  )
}

export default EditProduct