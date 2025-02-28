import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchUserOrders } from '../redux/slices/orderSlice'

function MyOrdersPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {orders, loading, error} = useSelector((state) => state.orders)

    useEffect(() => {
        dispatch(fetchUserOrders())
    }, [dispatch])

    const handleRowClick = (orderId) =>{
        navigate(`/order/${orderId}`)
    }

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:p-6">
        <h1 className="text-3xl font-semibold text-gray-800">My Orders</h1>
        <div className="relative mt-6 shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full bg-white text-left">
                <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
                    <tr>
                    <th className='py-2 px-4 sm:py-3'>Image</th>
                    <th className='py-2 px-4 sm:py-3'>order Id</th>
                    <th className='py-2 px-4 sm:py-3'>created</th>
                    <th className='py-2 px-4 sm:py-3'>shipping Address</th>
                    <th className='py-2 px-4 sm:py-3'>item</th>
                    <th className='py-2 px-4 sm:py-3'>Price</th>
                    <th className='py-2 px-4 sm:py-3'>Status</th>
                    </tr>
                </thead>
                <tbody>
                {
                    orders.map((order, index) => (
                        <tr key={index} className='border-b border-gray-100'
                        onClick={()=>handleRowClick(order._id)}>
                            <td className='py-3 px-4 sm:py-4'>
                                <img src={order.orderItems[0].image} alt={order.orderItems[0].name} className='w-12 h-12 object-cover rounded-lg'/>
                            </td>
                            <td className='py-3 px-4 sm:py-4'>{order._id}</td>
                            <td className="py-3 px-4 sm:py-4">{new Date(order.createdAt).toDateString()}</td>
                            <td className='py-3 px-4 sm:py-4'>{order.shippingAddress.city}, {order.shippingAddress.country}</td>
                            <td className='py-3 px-4 sm:py-4'>{order.orderItems.length}</td>
                            <td className='py-3 px-4 sm:py-4'>${order.totalPrice}</td>
                            <td className={'py-3 px-4 sm:py-4 '}> <span className={`px-1 py-0.5 rounded-full ${order.isPaid ?'bg-green-200':'bg-red-200 ' }`}>{order.isPaid ? 'Paid' : 'Not Paid'}</span> </td>
                        </tr>
                    ))
                }
                </tbody>
                </table>
            </div>
    </div>

  )
}

export default MyOrdersPage