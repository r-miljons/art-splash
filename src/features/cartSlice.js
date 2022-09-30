import { createSlice } from "@reduxjs/toolkit";

// On every cart action, save the cart state to the local storage
export const saveCartInfo = (store) => (next) => (action) => {
    const result = next(action);
    if ( action.type?.startsWith("cart/")) {
        const cartState = store.getState().cart;
        localStorage.setItem("cart", JSON.stringify(cartState));
    }
    return result;
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : { contents: [], total: 0 },
    reducers: {
        addItem: (state, action) => {
            if (state.contents.find(item => item._id === action.payload._id)) {
                return state;
            }
            state.contents.push(action.payload);
            let cartTotal = 0;
            state.contents.forEach((item) => {
                cartTotal += item.price;
            });
            state.total = cartTotal.toFixed(2);
            return state;
        },
        removeItem: (state, action) => {
            state.contents = state.contents.filter(item => item._id !== action.payload._id);
            let cartTotal = 0;
            state.contents.forEach((item) => {
                cartTotal += item.price;
            });
            state.total = cartTotal.toFixed(2);
            return state;
        },
        clear: (state) => {
            state = { contents: [], total: 0 };
            return state;
        },
    },
});

export const {
    addItem,
    removeItem,
    clear,
} = cartSlice.actions

export default cartSlice.reducer