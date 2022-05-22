import styled from '@emotion/styled'
import React, { FC } from 'react'
import ContainerApp from '../Container/Container'
import PrivateComponents from './PrivateComponents'
import PublicComponents from './PublicComponents'

const LinksWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

const HeaderApp: FC = () => {
    const loginStatus: boolean = true
    return (
        <header className="App-header">
            <ContainerApp>
                <LinksWrapper>
                    <div>
                        <a href="">О компании</a>
                        <a href="">Товары</a>
                    </div>
                    {loginStatus ? <PrivateComponents/> : <PublicComponents/>}
                </LinksWrapper>
            </ContainerApp>
        </header>
    )
}

export default HeaderApp