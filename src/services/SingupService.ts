import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { IUserLogin } from "../models/IUserLogin";
import { signupFetch, signupSuccess } from "../store/reducers/signupSlice";
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
                    console.log(error.message)
                })
        } catch (error) {
            
        }
    }
}