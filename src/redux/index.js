import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/reducer';
import gamesReducer from './games/reducer';
import favoriteReducer from './favorites/reducer';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        game: gamesReducer,
        favorites: favoriteReducer
    }
});