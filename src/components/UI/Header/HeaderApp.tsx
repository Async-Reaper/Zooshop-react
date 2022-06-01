import styled from '@emotion/styled'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import ContainerApp from '../Container/Container'
import PrivateComponents from './PrivateComponents'
import PublicComponents from './PublicComponents'

const LinksWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

const HeaderApp: FC = () => {
    const { loginStatus } = useTypedSelector(state => state.login)
    
    return (
        <header className="App-header">
            <ContainerApp>
                <LinksWrapper>
                    <div>
                        <Link to='/'>О компании</Link>
                        <Link to='/products'>Товары</Link>
                    </div>
                    {loginStatus ? <PrivateComponents/> : <PublicComponents/>}
                </LinksWrapper>
            </ContainerApp>
        </header>
    )
}

export default HeaderApp