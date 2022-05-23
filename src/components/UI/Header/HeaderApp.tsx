import styled from '@emotion/styled'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import ContainerApp from '../Container/Container'
import PrivateComponents from './PrivateComponents'
import PublicComponents from './PublicComponents'

const LinksWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

const HeaderApp: FC = () => {
    const loginStatus: boolean = false
    return (
        <header className="App-header">
            <ContainerApp>
                <LinksWrapper>
                    <div>
                        <Link to='/company'>О компании</Link>
                        <Link to='/products'>Товары</Link>
                    </div>
                    {loginStatus ? <PrivateComponents/> : <PublicComponents/>}
                </LinksWrapper>
            </ContainerApp>
        </header>
    )
}

export default HeaderApp