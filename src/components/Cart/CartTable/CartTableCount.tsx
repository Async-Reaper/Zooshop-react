import React, { FC } from 'react'
import styled from '@emotion/styled'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove'
import { IconButton } from '@mui/material';

const CountText = styled('span')({
    padding: '0 10px'
})

interface ICartTableCountProps {
    count: number;
    takeProduct: () => void;
    addProduct: () => void
}

const CartTableCount: FC<ICartTableCountProps> = ({count, takeProduct, addProduct}) => {
    return (
    <>
        <IconButton color="secondary" onClick={takeProduct} aria-label="add an alarm">
            <RemoveIcon />
        </IconButton>
        <CountText>{count} шт.</CountText>
        <IconButton color="primary" onClick={addProduct} aria-label="add an alarm">
            <AddIcon />
        </IconButton>
    </>
    )
}

export default CartTableCount