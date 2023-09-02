import { createSlice } from '@reduxjs/toolkit';
import { Sneaker } from '../types';

export const cartSlice = createSlice({ 
    name: 'addToCart', 
    initialState: [] as Sneaker[],
    reducers: { 
        addToCart: (state, action) => { 
            state.push(action.payload as Sneaker);
        }, 
        removeFromCart: state => { 
            // state.cart -= 1 
        } 
    } 
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;