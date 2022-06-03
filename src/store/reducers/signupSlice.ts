import { createSlice } from '@reduxjs/toolkit'

interface ISignupSlice { 
    loading: boolean;
    error: boolean;
    signupStatus: boolean;
    answerText: string
}

const initialState: ISignupSlice = {
    loading: false,
    error: false,
    signupStatus: false,
    answerText: '',
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
            state.answerText = action.payload
        },
        signupError(state, action) {
            state.loading = false;
            state.error = true;
            state.answerText = action.payload
        },
    }
})

export default signupSlice.reducer
export const { signupFetch, signupSuccess, signupError } = signupSlice.actions