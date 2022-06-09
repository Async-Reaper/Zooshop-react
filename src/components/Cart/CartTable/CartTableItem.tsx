import { TableCell, TableRow } from '@mui/material';
import React, { FC } from 'react';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { ICart } from '../../../models/ICart';
import { addCount, takeCount } from '../../../store/reducers/cartSlice';

interface ICartTableProps {
    product: ICart
}

const CartTableItem: FC<ICartTableProps> = ({product}) => {
    const dispatch = useTypedDispatch()
    const { cart } = useTypedSelector(state => state.cart)

    const addProduct = () => {
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch(addCount(product.id))
    }

    const takeProduct = () => {
        dispatch(takeCount(product.id))
        localStorage.setItem('cart', JSON.stringify(cart))
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
                <button onClick={() => takeProduct()}>-</button>
                {product.count} шт.
                <button onClick={() => addProduct()}>+</button>
            </TableCell>
            <TableCell align="right">{product.price} р.</TableCell>
        </TableRow>
    )
}

export default CartTableItem