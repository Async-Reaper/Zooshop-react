import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const PublicComponents:FC = () => {
    return (
        <div>
            <Link to='/login'>Войти</Link>
            <Link to='/signup'>Зарегистрироваться</Link>
        </div>
    )
}

export default PublicComponents