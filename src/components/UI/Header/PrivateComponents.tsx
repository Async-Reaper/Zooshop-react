import React, { FC } from 'react'
import styled from '@emotion/styled';
import ButtonsPrivateHeader from './ButtonsPrivateHeader';
import Cart from '../../Cart/Cart';

const IconWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 400px)': {
        display: 'grid',
        textAlign: 'right',
    }
})

const PrivateComponents: FC = () => {
    return (
        <IconWrapper>
            <ButtonsPrivateHeader />
            <Cart />
        </IconWrapper>
    )
}

export default PrivateComponents