import styled from '@emotion/styled'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const LinkWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 460px)': {
        display: 'grid',
        textAlign: 'right',
    }
})

const PublicComponents:FC = () => {
    return (
        <LinkWrapper>
            <Link to='/login'>Войти</Link>
            <Link to='/signup'>Зарегистрироваться</Link>
        </LinkWrapper>
    )
}

export default PublicComponents