import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/Products/productslice';

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

store.subscribe(()=>console.log(store.getState()))
