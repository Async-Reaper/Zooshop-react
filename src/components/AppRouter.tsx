import React, { FC } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import PrivateRoute from '../routes/PrivateRoute'
import PublicRoute from '../routes/PublicRoute'

const AppRouter: FC = () => {
    const { loginStatus } = useTypedSelector(state => state.login)
    return (
        <>
            {loginStatus ? <PrivateRoute/> : <PublicRoute/>}
        </>
    )
}

export default AppRouter