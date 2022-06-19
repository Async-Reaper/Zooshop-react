import React, { FC, useEffect } from 'react'
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { logout } from '../../../store/reducers/loginSlice'
import { setStateCartModal } from '../../../store/reducers/modalWindowsSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Badge } from '@mui/material';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { getTotalCount } from '../../../store/reducers/cartSlice';

const ButtonsPrivateHeader: FC = () => {
    const dispatch = useTypedDispatch()
    const { cart, totalCountProduct } = useTypedSelector(state => state.cart)

    if (!localStorage.getItem('cart')) localStorage.setItem('cart', JSON.stringify(cart))

    useEffect(() => {
        dispatch(getTotalCount(JSON.parse(localStorage.getItem('cart') || '')))
    }, [cart])
    
    return (
        <>
            <Tooltip title="Корзина">
                <IconButton onClick={() => dispatch(setStateCartModal(true))}>
                    <Badge badgeContent={totalCountProduct} color="secondary">
                        <ShoppingCartIcon/>
                    </Badge>    
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