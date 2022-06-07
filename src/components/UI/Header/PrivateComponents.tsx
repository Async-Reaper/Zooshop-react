import React, { FC } from 'react'
import styled from '@emotion/styled';
import ButtonsPrivateHeader from './ButtonsPrivateHeader';
import Cart from '../../Cart/Cart';

const IconWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    width: 100
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