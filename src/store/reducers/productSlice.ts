import {createSlice} from '@reduxjs/toolkit'
import { IProduct } from '../../modules/IProduct'

interface IProductState {
    products: IProduct[];
    loading: boolean;
    error: boolean
}

const initialState: IProductState = {
    products: [],
    loading: false,
    error: false
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getProductFetch(state) {
            state.loading = true;
            state.error = false;
        },

        getProductSuccess(state, action) {
            state.loading = false;
            state.error = false;
            state.products = action.payload;
        },

        getProductError(state) {
            state.error = true;
            state.loading = false
        }
    }
})

export default productSlice.reducer
export const { getProductError, getProductFetch, getProductSuccess } = productSlice.actions