import styled from '@emotion/styled'
import React, {FC, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import ContainerApp from '../../Container/Container'
import PrivateComponents from '../privateLinks/PrivateComponents'
import PublicComponents from '../publicLinks/PublicComponents'

const LinksWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

const PublicWrapper = styled('div')({
    '@media (max-width: 460px)': {
        display: 'grid',
    }
})

const HeaderApp: FC = () => {
    const { loginStatus } = useTypedSelector(state => state.login);
    const { cart } = useTypedSelector(state => state.cart);
    useEffect(() => {

    },[loginStatus])
    if (!localStorage.getItem('cart')) localStorage.setItem('cart', JSON.stringify(cart))
    return (
        <header className="App-header">
            <ContainerApp>
                <LinksWrapper>
                    <PublicWrapper>
                        <Link to='/'>О компании</Link>
                        <Link to='/products'>Товары</Link>
                    </PublicWrapper>
                    {loginStatus ? <PrivateComponents/> : <PublicComponents/>}
                </LinksWrapper>
            </ContainerApp>
        </header>
    )
}

export default HeaderApp