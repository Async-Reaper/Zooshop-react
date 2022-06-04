import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { IUserLogin } from "../models/IUserLogin";
import { AppDispatch } from "../store/store";

export const LoginService = (data: IUserLogin) => {
    return async (dispatch: AppDispatch) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(userCredential)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
}