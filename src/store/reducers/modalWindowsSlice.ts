import { createSlice } from "@reduxjs/toolkit";


interface IModalWindowsSlice {
    cartModal: boolean;
    cartSuccessBuy: boolean
}

const initialState: IModalWindowsSlice = {
    cartModal: false,
    cartSuccessBuy: false
}

const modalWindowsSlice = createSlice({
    name: 'modalWindow',
    initialState,
    reducers: {
        setStateCartModal(state, action) {
            state.cartModal = action.payload
        },
        setStateCartSuccessBuy(state, action) {
            state.cartSuccessBuy = action.payload
        }
    }
})

export default modalWindowsSlice.reducer
export const { setStateCartModal, setStateCartSuccessBuy } = modalWindowsSlice.actions