import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: [],
        isCartMenuVisible: false
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(game => game.id !== action.payload)
        },
        clearCart: (state, action) => {
            state.itemsInCart = state.itemsInCart = []
        },
        setIsCartMenuVisible: (state, action) => {
            state.isCartMenuVisible = !state.isCartMenuVisible
        }
    }
});

export const { setItemInCart, deleteItemFromCart, clearCart, setIsCartMenuVisible } = cartSlice.actions;
export default cartSlice.reducer;