import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const htmlSlice = createSlice({
    name: 'html',
    initialState,
    reducers: {
        setHTMLcontent: (state, action) => {
            console.log("state", state, action)
            // const todo = action.payload;
            // console.log("todo", todo)
            // state.value = {...state.value, content: todo}
        }
    }
});

export const { setHTMLcontent } = htmlSlice.actions;

export default htmlSlice.reducer;