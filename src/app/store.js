import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import htmlSlice from "../features/counter/htmlSlice";

export const store = configureStore({
    reducer: {
        product: counterReducer,
        html: htmlSlice
    },
})