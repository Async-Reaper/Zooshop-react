import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { IUserLogin } from "../models/IUserLogin";
import { signupFetch, signupSuccess, signupError } from "../store/reducers/signupSlice";
import { AppDispatch } from "../store/store";

export const SignupService = (data: IUserLogin) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(signupFetch())
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    localStorage.setItem('email', JSON.stringify(userCredential.user.email) || '')
                    localStorage.setItem('uid', userCredential.user.uid)
                    dispatch(signupSuccess('Регистрация прошла успешно'))
                }).catch((error) => {
                    dispatch(signupError(error.message))
                    console.log(error.message)
                })
        } catch (error) {
            
        }
    }
}