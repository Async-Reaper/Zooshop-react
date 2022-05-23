import { AppDispatch } from '../store/store'
import { getProductError, getProductFetch, getProductSuccess } from '../store/reducers/productSlice'
import axios from 'axios'
import { IProduct } from '../models/IProduct'

const getAllProducts = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(getProductFetch())
            const response = await axios.get<IProduct[]>('https://practice-8c822-default-rtdb.firebaseio.com/products.json')
            const res = response.data
            dispatch(getProductSuccess(res))
        } catch (error) {
            dispatch(getProductError())
        }
    }
}

export default getAllProducts
