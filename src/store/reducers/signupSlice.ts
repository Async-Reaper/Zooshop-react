import { createSlice } from '@reduxjs/toolkit'

interface ISignupSlice { 
    loading: boolean;
    loginStatus: boolean;
    error: boolean;
    answerText: string
}

const initialState: ISignupSlice = {
    loading: false,
    loginStatus: false,
    error: false,
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