import axios from "axios"
import { IUserLogin } from "../models/IUserLogin"
import { signupError, signupFetch } from "../store/reducers/signupSlice"
import { signupResponse } from './signupResponse'
import { AppDispatch } from "../store/store"

export const SignupService = (data: IUserLogin) => {
    return async (dispatch: AppDispatch) => {
        try {
            

        } catch (error) {
            
        }
    }
}