import React, { FC } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import PrivateRoute from '../routes/PrivateRoute'
import PublicRoute from '../routes/PublicRoute'
import { useTypedDispatch } from '../hooks/useTypedDispatch'
import { setLoginStatus } from '../store/reducers/loginSlice'

const AppRouter: FC = () => {
    const { loginStatus } = useTypedSelector(state => state.login)
    const dispatch = useTypedDispatch()

    if (localStorage.getItem('uid')) {
        dispatch(setLoginStatus(true))
    } else {
        dispatch(setLoginStatus(false))
    } 
    return (
        <>
            {loginStatus ? <PrivateRoute/> : <PublicRoute/>}
        </>
    )
}

export default AppRouter