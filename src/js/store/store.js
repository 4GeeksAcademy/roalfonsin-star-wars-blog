import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./slices/charactersSlice";
import vehiclesSlice from "./slices/vehiclesSlice";
import planetsSlice from "./slices/planetsSlice";

const store = configureStore({
    reducer: {
        characters: charactersSlice.reducer,
        vehicles: vehiclesSlice,
        planets: planetsSlice,
    },
});

export default store;