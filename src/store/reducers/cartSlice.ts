import { createSlice } from "@reduxjs/toolkit";
import { ICart } from "../../models/ICart";
import { getTotalSum } from "../../utils/getTotalSum";


interface ICartSlice {
    cart: ICart[];
    totalPrice: number;
}

const initialState: ICartSlice = {
    cart: [],
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.cart.push(action.payload)
        },
        showCart(state, action) {
            state.cart = action.payload
        },
        addCount(state, action) {
            state.cart.map(item => item.id === action.payload && item.count++)
        },
        getTotalPrice(state) {
            state.totalPrice = getTotalSum(state.cart)
        }
    }
})

export default cartSlice.reducer
export const { addToCart, showCart, addCount, getTotalPrice } = cartSlice.actions