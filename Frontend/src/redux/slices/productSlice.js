import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProductByFilters = createAsyncThunk('products/fetchByFilters', async ({
    collections,
    sizes,
    colors,
    gender,
    minPrice,
    maxPrice,
    sortBy,
    search,
    category,
    material,
    brands,
    limit,
}) => {
   const query = new URLSearchParams()
   if(collections) query.append("collection", collections)
    if(sizes) query.append("size", sizes)
    if(colors) query.append("color", colors)
    if(gender) query.append("gender", gender)
    if(minPrice) query.append("minPrice", minPrice)
    if(maxPrice) query.append("maxPrice", maxPrice)
    if(sortBy) query.append("sortBy", sortBy)
    if(search) query.append("search", search)
    if(category) query.append("category", category)
    if(material) query.append("material", material)
    if(brands) query.append("brand", brands)
    if(limit) query.append("limit", limit)
    
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products?${query.toString()}`)
    return response.data

  })

  export const fetchProductDetails = createAsyncThunk('products/fetchProductDetails', async (id, { rejectWithValue }) => {
    if (!id) throw new Error("Product ID is required");
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});


  export const updateProduct = createAsyncThunk('products/updateProduct', async ({id, productData}) => {
    const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`, productData,
        {
            headers:{
                Authorization: `Bearer ${localStorage.getItem("userToken")}`
            }
        }
    )
    return response.data
    
  })

  export const fetchSimilarProducts = createAsyncThunk(
    'products/fetchSimilarProducts',
    async ({id}) => { // ✅ Accept plain value
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/similar/${id}`);
      return response.data;
    }
  );
  



  const productSlice = createSlice({
    name: 'products',
    initialState:{
        products:[],
        selectedProduct: null,
        similarProducts:[],
        loading:false,
        error:null,
        filters:{
            collection : "",
            size : "",
            color : "",
            gender : "",
            minPrice : "",
            maxPrice : "",
            sortBy : "",
            Search : "",
            category : "",
            material : "",
            brand : "",
            limit : "",

        }
    },
    reducers: {
      setFilters: (state, action)=>{
          state.filters ={ ...state.filters, ...action.payload}
      },
      clearFilters: (state)=>{
          state.filters = {
            collection : "",
            size : "",
            color : "",
            gender : "",
            minPrice : "",
            maxPrice : "",
            sortBy : "",
            Search : "",
            category : "",
            material : "",
            brand : "",
            limit : "",
          }
      }
    },
    extraReducers: builder => {
      builder.addCase(fetchProductByFilters.pending, (state) => {
          state.loading = true
          state.error = null
        })
      .addCase(fetchProductByFilters.fulfilled, (state, action) => {
          state.loading = false
          state.products = Array.isArray(action.payload)? action.payload : [] 
          })
      .addCase(fetchProductByFilters.rejected, (state, action) => {
              state.loading = false
              state.error = action.error.message
              })
  
      
        // fetchProductDetails
        .addCase(fetchProductDetails.pending, (state) => {
            state.loading = true
            state.error = null
          })
            .addCase(fetchProductDetails.fulfilled, (state, action) => {
                state.loading = false
                state.selectedProduct = action.payload
                })
            .addCase(fetchProductDetails.rejected, (state, action) => {
                    state.loading = false
                    state.error = action.error.message
                    })

    //updateProduct
                
    .addCase(updateProduct.pending, (state) => {
        state.loading = true
        state.error = null
        })
        .addCase(updateProduct.fulfilled, (state, action) => {
            state.loading = false
            const updateProduct = action.payload
            const index = state.products.findIndex(product => product._id === updateProduct._id)
            if(index!== -1){
                state.products[index] = updateProduct
            }
            })
        .addCase(updateProduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
                })
    
 //fetchSimilarProducts
                .addCase(fetchSimilarProducts.pending, (state) => {
                    state.loading = true
                    state.error = null
                    })
                    .addCase(fetchSimilarProducts.fulfilled, (state, action) => {
                        state.loading = false
                        state.similarProducts = action.payload
                        })
                    .addCase(fetchSimilarProducts.rejected, (state, action) => {
                            state.loading = false
                            state.error = action.error.message
                            })
    }
  })

  export const {setFilters, clearFilters} = productSlice.actions
    export default productSlice.reducer