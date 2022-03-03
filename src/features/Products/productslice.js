import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios';


const initialState = {
    
    products: [],
    status: 'idle',
}
export const getAsync = createAsyncThunk(
  'products/axios',
  async (amount) => {
    // console.log(amount);
    const response = await axios.get(amount);
    // The value we return becomes the `fulfilled` action payload
    // console.log(response.data);
    return response.data;
  }
);


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        additems:(state,action)=>{
            state.products = [...state.products,action.payload];
        },
        
    },
    extraReducers: (builder) => {
            builder
            .addCase(getAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                // console.log(action.payload[0].data[0]);
                state.products = [action.payload[0].data[0]];
            });
    },
})
export const { additems } = productSlice.actions;
export const selectProducts= state => state.products.products


export default productSlice.reducer