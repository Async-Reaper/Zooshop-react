import React, { FC } from 'react';
import { IconButton, TableCell, TableRow } from '@mui/material';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { ICart } from '../../../models/ICart';
import { addCount, deleteInCart, takeCount } from '../../../store/reducers/cartSlice';
import CartTableCount from './CartTableCount';

interface ICartTableProps {
    product: ICart
}

const CartTableItem: FC<ICartTableProps> = ({product}) => {
    const dispatch = useTypedDispatch()
    const addProduct = () => dispatch(addCount(product.id))
    const takeProduct = () => product.count === 1 ? dispatch(deleteInCart(product.id)) : dispatch(takeCount(product.id))

    return (
        <TableRow
            key={product.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {product.name}
            </TableCell>
            <TableCell align="right">
                <CartTableCount count={product.count} addProduct={addProduct} takeProduct={takeProduct} />
            </TableCell>
            <TableCell align="right">{product.price} р.</TableCell>
        </TableRow>
    )
}

export default CartTableItem