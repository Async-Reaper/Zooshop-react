import axios from "axios"
import { IUserLogin } from "../models/IUserLogin"
import { loginError, loginFetch, loginSuccess } from "../store/reducers/loginSlice"
import { AppDispatch } from "../store/store"

export const LoginService = (data: IUserLogin) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(loginFetch());
            const response = await axios.get<IUserLogin[]>('https://practice-8c822-default-rtdb.firebaseio.com/users')
            const res = response.data;
            res.map(user => {
                if (user.name === data.name && user.password === data.password) {
                    dispatch(loginSuccess())
                } else {
                    dispatch(loginError('Неправильный логин или пароль'))
                }
            })
        } catch (error) {
            dispatch(loginError(error))
        }
    }
}