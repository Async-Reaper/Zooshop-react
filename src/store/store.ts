import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";


const rootState = combineReducers({
    product: productSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootState
    })
}

export type RootState = ReturnType<typeof rootState>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']