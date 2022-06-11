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
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        showCart(state, action) {
            state.cart = action.payload
        },
        addCount(state, action) {
            state.cart.map(item => {
                if (item.id === action.payload) {
                    item.count++
                    item.price = (item.price / (item.count - 1)) + item.price
                }
            })

            localStorage.setItem('cart', JSON.stringify(state.cart))

        },
        takeCount(state, action) {
            state.cart.map(item => {
                if (item.id === action.payload) {
                    item.count--
                    item.price = item.price - (item.price / (item.count + 1))
                }
            })
            localStorage.setItem('cart', JSON.stringify(state.cart))

        },
        getTotalPrice(state) {
            state.totalPrice = getTotalSum(state.cart)
        }
    }
})

export default cartSlice.reducer
export const { addToCart, showCart, addCount, takeCount, getTotalPrice } = cartSlice.actions