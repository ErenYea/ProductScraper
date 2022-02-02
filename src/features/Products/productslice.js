import { createSlice } from '@reduxjs/toolkit'




const initialState = {
    
    products: [ "Model S", "Model 3", "Model X", "Model Y" ]
}


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}
})

export const selectProducts= state => state.products.products


export default productSlice.reducer