import axios from "axios"
import { IUserLogin } from "../models/IUserLogin"
import { AppDispatch } from "../store/store"
import { signupSuccess } from "../store/reducers/signupSlice"

export const signupResponse = (data: IUserLogin) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.post('https://practice-8c822-default-rtdb.firebaseio.com/users.json', {
                data: data
            })
            dispatch(signupSuccess('Регистрация прошла успешно.'))
        } catch (error) {
            dispatch(signupSuccess(error))
        }
    }
}