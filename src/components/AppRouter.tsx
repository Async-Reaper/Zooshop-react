import React, { FC } from 'react'
import PrivateRoute from '../routes/PrivateRoute'
import PublicRoute from '../routes/PublicRoute'

const AppRouter: FC = () => {
    const loginStatus: boolean = false
    return (
        <>
            {loginStatus ? <PrivateRoute/> : <PublicRoute/>}
        </>
    )
}

export default AppRouter