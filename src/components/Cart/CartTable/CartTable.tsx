import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import React, { FC } from 'react';
import { ICart } from '../../../models/ICart';
import CartTableHead from './CartTableHead';
import CartTableItem from './CartTableItem';
import CartTotalSum from './CartTotalSum';

const CartTable: FC = () => {

    const cart: ICart[] = JSON.parse(localStorage.getItem('cart') || '')

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <CartTableHead />
                <TableBody>
                    {cart.map((product) => (
                        <CartTableItem key={product.id} name={product.name} price={product.price} count={product.count} />
                    ))}
                    <CartTotalSum cart={cart} />
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CartTable