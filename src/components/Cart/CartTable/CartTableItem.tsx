import React, { FC } from 'react';
import { IconButton, TableCell, TableRow } from '@mui/material';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { ICart } from '../../../models/ICart';
import { addCount, takeCount } from '../../../store/reducers/cartSlice';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import cl from '../Cart.module.css'

interface ICartTableProps {
    product: ICart
}

const CartTableItem: FC<ICartTableProps> = ({product}) => {
    const dispatch = useTypedDispatch()

    const addProduct = () => {
        dispatch(addCount(product.id))
    }

    const takeProduct = () => {
        dispatch(takeCount(product.id))
    }

    return (
        <TableRow
            key={product.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {product.name}
            </TableCell>
            <TableCell align="right">
                <IconButton color="secondary" onClick={() => takeProduct()} aria-label="add an alarm">
                    <RemoveIcon />
                </IconButton>
                <span className={cl.CountText}>{product.count} шт.</span>
                <IconButton color="primary" onClick={() => addProduct()} aria-label="add an alarm">
                    <AddIcon />
                </IconButton>
            </TableCell>
            <TableCell align="right">{product.price} р.</TableCell>
        </TableRow>
    )
}

export default CartTableItem