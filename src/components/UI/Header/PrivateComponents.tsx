import React, { FC } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import styled from '@emotion/styled';

const IconWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    width: 75
})

const PrivateComponents: FC = () => {
    return (
        <IconWrapper>
            <ShoppingCartIcon/>
            <LogoutIcon/>
        </IconWrapper>
    )
}

export default PrivateComponents