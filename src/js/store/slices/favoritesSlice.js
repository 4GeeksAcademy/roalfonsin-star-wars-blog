import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers:{

        addFavorite: (state, action) => {
            state.push(action.payload);
        },
        
        removeFavorite: (state, action) => {
            let indexToRemove = 0;
            for (let index in state)
                if (state[index].id == action.payload)
                    indexToRemove = index;
            state.splice(indexToRemove,1);
        }
    }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice;