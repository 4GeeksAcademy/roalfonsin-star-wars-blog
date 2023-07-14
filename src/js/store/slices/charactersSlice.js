import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers:{
        addCharacter: (state, action) => {
            state.push(action.payload);
        },
    }
});

export const { addCharacter } = charactersSlice.actions;
export default charactersSlice;