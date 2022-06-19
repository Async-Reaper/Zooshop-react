import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { IUserLogin } from "../models/IUserLogin";
import { loginError, loginFetch, loginSuccess } from "../store/reducers/loginSlice";
import { AppDispatch } from "../store/store";

export const LoginService = (data: IUserLogin) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(loginFetch())
            const auth = getAuth();
            signInWithEmailAndPassword(auth, data.email, data.password)
                .then((user) => {
                    localStorage.setItem('email', JSON.stringify(user.user.email) || '')
                    localStorage.setItem('uid', user.user.uid)
                    dispatch(loginSuccess())
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    dispatch(loginError(errorMessage))
                });
            
        } catch (error) {
            
        }
    }
}