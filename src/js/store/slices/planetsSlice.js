import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const planetsSlice = createSlice({
    name: 'planets',
    initialState,
    reducers:{
        addPlanet: (state, action) => {
            state.push(action.payload);
        },
    }
});

export const { addPlanet } = planetsSlice.actions;
export default planetsSlice;