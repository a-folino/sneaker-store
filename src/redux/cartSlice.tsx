import { createSlice } from '@reduxjs/toolkit';

type CartState = {
    shoe: string;
    price: number;
    id: number;
};

export const cartSlice = createSlice({ 
    name: 'addToCart', 
    initialState: [] as CartState[],
    reducers: { 
        addToCart: (state, action) => { 
            state.push(action.payload as CartState);
        }, 
        removeFromCart: state => { 
            // state.cart -= 1 
        } 
    } 
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;