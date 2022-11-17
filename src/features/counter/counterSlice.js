import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const counterSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            const todo = action.payload;
            state.value = { ...state.value, ...todo }
        }
    }
});

export const { setProducts } = counterSlice.actions;

export default counterSlice.reducer;
