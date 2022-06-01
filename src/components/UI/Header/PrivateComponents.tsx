import React, { FC } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import styled from '@emotion/styled';

const IconWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    width: 75
})

const PrivateComponents: FC = () => {
    return (
        <IconWrapper>
            <Tooltip title="Корзина">
                <IconButton>
                    <ShoppingCartIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Выйти">
                <IconButton>
                    <LogoutIcon/>
                </IconButton>
            </Tooltip>
        </IconWrapper>
    )
}

export default PrivateComponents