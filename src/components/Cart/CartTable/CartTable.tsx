import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import React, { FC, useEffect, useMemo } from 'react';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { ICart } from '../../../models/ICart';
import { getTotalPrice, showCart } from '../../../store/reducers/cartSlice';
import CartTableHead from './CartTableHead';
import CartTableItem from './CartTableItem';
import CartTotalSum from './CartTotalSum';

const CartTable: FC = () => {
    const { cart, totalPrice } = useTypedSelector(state => state.cart)
    const dispatch = useTypedDispatch()

    useEffect(() => {
        dispatch(showCart(JSON.parse(localStorage.getItem('cart') || '')))
    }, [])
    const totalSpice = useMemo(() => dispatch(getTotalPrice()), [cart])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <CartTableHead />
                <TableBody>
                    {cart.map((product) => (
                        <CartTableItem key={product.id} product={product} />
                    ))}
                    <CartTotalSum cart={cart} totalPrice={totalPrice} />
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CartTable