import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, loading, error } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!cart || !cart.products || cart.products.length === 0) {
      return;
    }

    try {
      const orderData = {
        shippingAddress,
        cartItems: cart.products,
        totalPrice: cart.totalPrice,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/checkout/place-order`,
        orderData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );

      if (response.status === 201) {
        navigate('/profile');
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  if (loading) return <p>Loading Cart</p>;
  if (error) return <p>Error: {error}</p>;
  if (!cart || !cart.products || cart.products.length === 0) return <p>No Items in Cart</p>;
    
  return (
   <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl gap-8 mx-auto py-10 px-6 tracking-tighter">
    {/* left section */}
    <div className="bg-white rounde-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form onSubmit={handlePlaceOrder}>
            <h3 className="text-lg mb-4">Contact Details</h3>
            <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" value={user? user.email : ""} readOnly className="w-full p-2 border border-gray-400 rounded" />
            </div>
            <h3 className="text-lg mb-4">Delivery</h3>
            <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700">First Name</label>
                    <input type="text" onChange={(e)=>setShippingAddress({...shippingAddress, firstName:e.target.value})} value={shippingAddress.firstName} className="w-full p-2 border border-gray-400 rounded" required/>
                </div>
                <div>
                    <label className="block text-gray-700">Last Name</label>
                    <input type="text" onChange={(e)=>setShippingAddress({...shippingAddress, lastName:e.target.value})} value={shippingAddress.lastName} className="w-full p-2 border border-gray-400 rounded" required/>
                </div>
            </div>
            <div className="mb-4">
                <div>
                    <label className="block text-gray-700">Address</label>
                    <input type="text" onChange={(e)=>setShippingAddress({...shippingAddress, address:e.target.value})} value={shippingAddress.address} className="w-full p-2 border border-gray-400 rounded" required/>
                </div>
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700">City </label>
                    <input type="text" onChange={(e)=>setShippingAddress({...shippingAddress, city:e.target.value})} value={shippingAddress.city} className="w-full p-2 border border-gray-400 rounded" required/>
                </div>
                <div>
                    <label className="block text-gray-700">Postal Code</label>
                    <input type="text" onChange={(e)=>setShippingAddress({...shippingAddress, postalCode:e.target.value})} value={shippingAddress.postalCode} className="w-full p-2 border border-gray-400 rounded" required/>
                </div>
            </div>
            <div className="mb-4">
                <div>
                    <label className="block text-gray-700">Country</label>
                    <input type="text" onChange={(e)=>setShippingAddress({...shippingAddress, country:e.target.value})} value={shippingAddress.country} className="w-full p-2 border border-gray-400 rounded" required/>
                </div>
            </div>
            <div className="mb-4">
                <div>
                    <label className="block text-gray-700">Phone Number</label>
                    <input type="tel" onChange={(e)=>setShippingAddress({...shippingAddress, phone:e.target.value})} value={shippingAddress.phone} className="w-full p-2 border border-gray-400 rounded" required/>
                </div>
            </div>
            <div className="mt-6">
                <button className="w-full bg-black text-white py-3 rounded">Place Order</button>:
                
            
            </div>
        </form>
    </div>
    {/* Right Section */}
    <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4">Order Summery</h3>
        <div className="border-t py-4 mb-4">
            {cart.products.map((product,index)=>(
                    <div key={index} className='flex items-start justify-between py-2 border-b border-gray-300'>
                        <div className="flex items-start">
                        <img src={product.image} alt={product.name} className="h-20 w-24 object-cover mr-4" />
                        <div>
                            <h3 className="text-md">{product.name}</h3>
                            <p className="text-gray-500">Size: {product.size}</p>
                            <p className="text-gray-500">Color: {product.color}</p>
                        </div>
                        </div>
                        <p className="text-xl">${product.price?.toLocaleString()}</p>
                    </div>

                ))
            }
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
            <p>Subtotal</p>
            <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
            <p>Shipping </p>
            <p>Free</p>
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
            <p>Total </p>
            <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
    </div>
   </div>
  )
}

export default Checkout