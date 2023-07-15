import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./slices/charactersSlice";
import vehiclesSlice from "./slices/vehiclesSlice";
import planetsSlice from "./slices/planetsSlice";
import favoritesSlice from "./slices/favoritesSlice";

const store = configureStore({
    reducer: {
        characters: charactersSlice.reducer,
        vehicles: vehiclesSlice.reducer,
        planets: planetsSlice.reducer,
        favorites: favoritesSlice.reducer,
    },
});

export default store;