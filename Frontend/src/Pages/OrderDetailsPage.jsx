import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { fetchOrderDetails } from '../redux/slices/orderSlice'

function OrderDetailsPage() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {orderDetails, loading, error} = useSelector((state) => state.orders)
    useEffect(() => {
        dispatch(fetchOrderDetails(id))
    }, [dispatch, id])
    

if(loading) return <p>Loading...</p>
if(error) return <p>Error: {error}</p>
      
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6"> Order Details</h2>
        {!orderDetails? (<p>No order Details Found</p>):
        (
            <div className="p-4 sm:p-6 rounded-lg border border-gray-300">
                <div className="flex flex-col sm:flex-row justify-between mb-8">
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold">
                            orderId: #{orderDetails._id}
                        </h3>
                        <p className="text-gray-600">
                            {new Date(orderDetails.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
                        <span className={`${orderDetails.isPaid? "bg-green-100 text-green-700" :"bg-red-100 text-red-700" } px-3 py-1 rounded-full text-sm font-medium mb-2`}>{orderDetails.isPaid?"Approved":"Pending"}</span>
                        <span className={`${orderDetails.isDelivered? "bg-green-100 text-green-700" :"bg-red-100 text-yellow-700" } px-3 py-1 rounded-full text-sm font-medium mb-2`}>{orderDetails.isDelivered?"Deliveres":"Pending Delivered"}</span>
                    </div>
                </div>
                {/* customer shipping payment info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h4 className="text-lg font-semibold mb-2">Payment Info</h4>
                        <p>Shipping Method: {orderDetails.paymentMethod}</p>
                        <p>Status: {orderDetails.isPaid?"Paid": "UnPaid"}</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-2">Shipping Info</h4>
                        <p>
                            Address: {"  "}
                            {`${orderDetails.shippingAddress.city},${orderDetails.shippingAddress.country}`}
                        </p>
                    </div>
                </div>
                {/* product list */}
                <div className="overflow-x-auto">
                    <div className="text-lg font-semibold mb-4">
                        <table className="min-w-full text-gray-600 mb-4">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderDetails.orderItems.map((item)=>(
                                    <tr key={item.productId} className='border-b border-gray-300 '>
                                       <td className="py-2 px-4 flex items-center">
                                        <img src={item.image} alt={item.name} className='w-12 h-12 object-cover rounded-lg mr-4'/>
                                        <Link to={`/product/${item.productId}`} className="text-blue-400 hover:underline">{item.name}</Link>
                                       </td>
                                       <td className="py-2 px-5 text-center">${item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Link to="/my-orders" className='text-blue-500 hover:underline'>Back To my orders</Link>
                </div>
            </div>
        )}
    </div>
  )
}

export default OrderDetailsPage