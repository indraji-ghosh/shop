import React from 'react'
import { HiArrowPathRoundedSquare, HiOutlineCreditCard, HiShoppingBag } from 'react-icons/hi2'

function FeatureSection() {
  return (
    <section className="py-16 px-4 bg-white border border-gray-200">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        
        {/* Free Shipping */}
        <div className="flex flex-col items-center justify-center">
          <div className="p-4 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
            <HiShoppingBag className="text-3xl text-gray-800" />
          </div>
          <h4 className="text-xl font-semibold tracking-tight mb-2">Free Shipping</h4>
          <p className="text-gray-600 text-sm">On all orders over $75.00</p>
        </div>

        {/* 45 Days Return */}
        <div className="flex flex-col items-center justify-center">
          <div className="p-4 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
            <HiArrowPathRoundedSquare className="text-3xl text-gray-800" />
          </div>
          <h4 className="text-xl font-semibold tracking-tight mb-2">45 Days Return</h4>
          <p className="text-gray-600 text-sm">MoneyBack Guarantee</p>
        </div>

        {/* Secure Checkout */}
        <div className="flex flex-col items-center justify-center">
          <div className="p-4 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
            <HiOutlineCreditCard className="text-3xl text-gray-800" />
          </div>
          <h4 className="text-xl font-semibold tracking-tight mb-2">Secure Checkout</h4>
          <p className="text-gray-600 text-sm">100% secure</p>
        </div>

      </div>
    </section>
  )
}

export default FeatureSection
