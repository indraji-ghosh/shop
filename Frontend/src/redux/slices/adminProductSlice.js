import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch Products
export const fetchAdminProducts = createAsyncThunk('adminProducts/fetchAdminProducts', async () => {
  const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/products`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    },
  });

  return response.data;
});

// Create Product
export const createProduct = createAsyncThunk('adminProducts/createProduct', async (productData) => {
  const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/admin/products`, productData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    },
  });

  return response.data.product; // Fixed: Return a single product
});

// Update Product
export const updateProduct = createAsyncThunk('adminProducts/updateProduct', async ({ id, productData }) => {
  const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/admin/products/${id}`, productData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    },
  });

  return response.data.product; // Fixed: Return a single product
});

// Delete Product
export const deleteProduct = createAsyncThunk('adminProducts/deleteProduct', async (id) => {
  await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    },
  });

  return id; // Return deleted product's id
});

const adminProductsSlice = createSlice({
  name: 'adminProducts',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Products
      .addCase(fetchAdminProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload; // Populate the entire product list
      })
      .addCase(fetchAdminProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || 'Failed to fetch products';
      })

      // Create Product
      .addCase(createProduct.fulfilled, (state, action) => {
        if (action.payload) {
          state.products.push(action.payload); // Push new product to the list
        }
      })

      // Update Product
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex((product) => product._id === action.payload._id);
        if (index !== -1) {
          state.products[index] = action.payload; // Update the correct product
        }
      })

      // Delete Product
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((product) => product._id !== action.payload);
      });
  },
});

export default adminProductsSlice.reducer;
