import { configureStore } from '@reduxjs/toolkit';
import { saveCartInfo } from './features/cartSlice';
import cartReducer from './features/cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        saveCartInfo,
    ])
});