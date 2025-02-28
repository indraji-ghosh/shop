import React from 'react'
import { IoMdClose } from 'react-icons/io'
import CartComponents from '../cart/CartComponents'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'




function CartDrawer({drawerOpen, toggleCartDrawer}) {
    const navigate = useNavigate()
    const {user, guestId} = useSelector((state) => state.auth)
    const {cart} = useSelector((state) => state.cart)
    const userId = user ? user._id : null



    const handleCheckout = () =>{
        toggleCartDrawer()
        if(!user){
            navigate("/login?redirect=checkout")
            localStorage.setItem('guestId', guestId)
        }
        else{
        navigate("/checkout")
        }
    }
  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[25rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50
    ${drawerOpen? "translate-x-0":"translate-x-full"}`}>
        
        <div className="flex justify-end p-4">
            <button  onClick={toggleCartDrawer}>
                <IoMdClose className='h-6 w-6'/>
            </button>
        </div>

        <div className="flex-grow p-4 overflow-y-auto">
            <h2 className='text-xl fonts-semibold mb-4'>Your cart</h2>
            {cart && cart?.products?.length > 0 ? (<CartComponents cart={cart} userId={userId} guestId={guestId} />): (<p>Your cart is empty</p>)}
           
        </div>
        
        
        <div className="p-4 bg-white sticky bottom-0">
        {cart && cart?.products?.length > 0 && (
            <>
            <button onClick={handleCheckout} className='w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition'>Checkout</button>
        <p className='text-sm text-gray-500 text-center mt-2 tracking-tighter'>
            Shipping, Taxes and discounts calculated at checkout
        </p>
            </>
        )}
        
        </div>
        </div>
  )
}

export default CartDrawer