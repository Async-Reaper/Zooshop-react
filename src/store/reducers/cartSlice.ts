import { createSlice } from "@reduxjs/toolkit";
import { ICart } from "../../models/ICart";


interface ICartSlice {
    cart: ICart[]
}

const initialState: ICartSlice = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.cart.push(action.payload)
        }
    }
})

export default cartSlice.reducer
export const { addToCart } = cartSlice.actions