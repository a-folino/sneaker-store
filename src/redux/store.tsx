import { configureStore } from '@reduxjs/toolkit' //create react app redux toolkit  
import cartSliceReducer from './cartSlice';


export const store = configureStore({ 
    reducer: { 
        cart: cartSliceReducer
    } 
}) 

export type RootState = ReturnType<typeof store.getState>