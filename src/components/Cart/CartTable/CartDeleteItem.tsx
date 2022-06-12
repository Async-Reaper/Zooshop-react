import React, { FC } from 'react'
import { IconButton } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { deleteInCart } from '../../../store/reducers/cartSlice';

interface ICartDeleteItemProps {
    id: number
}

const CartDeleteItem: FC<ICartDeleteItemProps> = ({id}) => {
    const dispatch = useTypedDispatch()
    
    return (
        <IconButton onClick={() => dispatch(deleteInCart(id))}>
            <DeleteOutlineOutlinedIcon />
        </IconButton>
    )
}

export default CartDeleteItem