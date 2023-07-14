import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const vehiclesSlice = createSlice({
    name: 'vehicles',
    initialState,
    reducers:{
        addVehicle: (state, action) => {
            state.push(action.payload);
        },
    }
});

export const { addVehicle } = vehiclesSlice.actions;
export default vehiclesSlice;