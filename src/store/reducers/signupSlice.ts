import { createSlice } from '@reduxjs/toolkit'

interface ISignupSlice { 
    loading: boolean;
    error: boolean;
    signupStatus: boolean;
    answerText: string;
    popupStatus: boolean
}

const initialState: ISignupSlice = {
    loading: false,
    error: false,
    signupStatus: false,
    answerText: '',
    popupStatus: false
}

const signupSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        signupFetch(state) {
            state.loading = true;
            state.error = false;
        },
        signupSuccess(state, action) {
            state.loading = false;
            state.error = false;
            state.signupStatus = true;
            state.popupStatus = true
            state.answerText = action.payload
        },
        signupError(state, action) {
            state.loading = false;
            state.error = true;
            state.answerText = action.payload
        },
        closePopup(state) {
            state.popupStatus = false
        }
    }
})

export default signupSlice.reducer
export const { signupFetch, signupSuccess, signupError, closePopup } = signupSlice.actions