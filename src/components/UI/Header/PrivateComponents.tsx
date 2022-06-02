import React, { FC } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import styled from '@emotion/styled';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { logout } from '../../../store/reducers/loginSlice'

const IconWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    width: 100
})

const PrivateComponents: FC = () => {
    const dispatch = useTypedDispatch()
    return (
        <IconWrapper>
            <Tooltip title="Корзина">
                <IconButton>
                    <ShoppingCartIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Выйти">
                <IconButton onClick={() => dispatch(logout())}>
                    <LogoutIcon/>
                </IconButton>
            </Tooltip>
        </IconWrapper>
    )
}

export default PrivateComponents