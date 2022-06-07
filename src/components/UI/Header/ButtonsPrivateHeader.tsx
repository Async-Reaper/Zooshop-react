import React, { FC } from 'react'
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { logout } from '../../../store/reducers/loginSlice'
import { setStateCartModal } from '../../../store/reducers/modalWindowsSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const ButtonsPrivateHeader: FC = () => {
    const dispatch = useTypedDispatch()

    return (
        <>
            <Tooltip title="Корзина">
                <IconButton onClick={() => dispatch(setStateCartModal(true))}>
                    <ShoppingCartIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Выйти">
                <IconButton onClick={() => dispatch(logout())}>
                    <LogoutIcon/>
                </IconButton>
            </Tooltip>
        </>
    )
}

export default ButtonsPrivateHeader