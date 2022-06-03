import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice from "./reducers/loginSlice";
import productSlice from "./reducers/productSlice";
import signupSlice from "./reducers/signupSlice";


const rootState = combineReducers({
    product: productSlice,
    login: loginSlice,
    signup: signupSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootState
    })
}

export type RootState = ReturnType<typeof rootState>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']