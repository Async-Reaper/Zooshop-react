import { createSlice } from '@reduxjs/toolkit'

interface ILoginSlice {
    loading: boolean;
    loginStatus: boolean;
    error: boolean;
    errorText: string
}

const initialState: ILoginSlice = {
    loading: false,
    loginStatus: false,
    error: false,
    errorText: ''
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginFetch(state) {
            state.loading = true;
            state.error = false;
        },
        loginSuccess(state) {
            state.loading = false;
            state.error = false;
            state.loginStatus = true;
        },
        loginError(state, action) {
            state.loading = false;
            state.error = true;
            state.errorText = action.payload
        },
        setLoginStatus(state, action) {
            state.loginStatus = action.payload
        }
    }
})

export default loginSlice.reducer;
export const { loginError, loginFetch, loginSuccess, setLoginStatus } = loginSlice.actions;