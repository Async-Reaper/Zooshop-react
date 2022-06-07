import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import loginSlice from "./reducers/loginSlice";
import modalWindowsSlice from "./reducers/modalWindowsSlice";
import productSlice from "./reducers/productSlice";
import signupSlice from "./reducers/signupSlice";


const rootState = combineReducers({
    product: productSlice,
    login: loginSlice,
    signup: signupSlice,
    modalWindows: modalWindowsSlice,
    cart: cartSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootState
    })
}

export type RootState = ReturnType<typeof rootState>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']