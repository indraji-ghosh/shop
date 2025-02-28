import {configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice';
import productReducer from './slices/productSlice'
import cartReducer from './slices/cartSlice'
import checkoutReducer from './slices/checkoutSlice'
import ordersReducer from './slices/orderSlice'
import adminSlice from './slices/adminSlice';
import adminProductSlice from './slices/adminProductSlice';
import adminOrdersReducer from './slices/adminOrderSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        cart: cartReducer,
        checkout: checkoutReducer,
        orders : ordersReducer,
        admin: adminSlice,
        adminProducts: adminProductSlice,
        adminOrders: adminOrdersReducer,
    }
  })

  export default store