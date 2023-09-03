import { createSlice } from '@reduxjs/toolkit';
import { Sneaker } from '../types';

export const cartSlice = createSlice({ 
    name: 'addToCart', 
    initialState: [] as Sneaker[],
    reducers: { 
        addToCart: (state, action) => { 
            state.push(action.payload as Sneaker);
        }, 
        removeFromCart: (state, action) => { 
            state.map(item => {
                if (item.id === action.payload) {
                    return state.splice(state.indexOf(item), 1);
                } else {
                    return item;
                }
            })
        }
    } 
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;