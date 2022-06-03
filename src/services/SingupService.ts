import axios from "axios"
import { IUserLogin } from "../models/IUserLogin"
import { signupError, signupFetch } from "../store/reducers/signupSlice"
import { signupResponse } from './signupResponse'
import { AppDispatch } from "../store/store"

export const SignupService = (data: IUserLogin) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(signupFetch())
            const response = await axios.get<IUserLogin[]>('https://practice-8c822-default-rtdb.firebaseio.com/users.json')
            const res = response.data
            res.map(user => {
                (user.name === data.name) ?
                dispatch(signupError('Такой пользователь уже существует')) :
                dispatch(signupResponse(data))
            })

        } catch (error) {
            
        }
    }
}