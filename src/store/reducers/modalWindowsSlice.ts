import { createSlice } from "@reduxjs/toolkit";


interface IModalWindowsSlice {
    cartModal: boolean;
}

const initialState: IModalWindowsSlice = {
    cartModal: false
}

const modalWindowsSlice = createSlice({
    name: 'modalWindow',
    initialState,
    reducers: {
        setStateCartModal(state, action) {
            state.cartModal = action.payload
        }
    }
})

export default modalWindowsSlice.reducer
export const { setStateCartModal } = modalWindowsSlice.actions