import React, { FC, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ICart } from '../../../models/ICart';
import { getTotalSum } from '../../../utils/getTotalSum';
import CartTableHead from './CartTableHead';
import CartTableItem from './CartTableItem';

const CartTable: FC = () => {

    const [cart, setCart] = useState<ICart[]>([
        {id: 1, name: 'Her', count: 2, price: 25},
        {id: 2, name: 'Helicopter', count: 4, price: 35},
        {id: 3, name: 'Lodka', count: 1, price: 65},
        {id: 4, name: 'Ivan', count: 1, price: 15},
        {id: 5, name: 'Vova', count: 2, price: 5}
    ])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <CartTableHead />
                <TableBody>
                    {cart.map((product) => (
                        <CartTableItem key={product.id} name={product.name} price={product.price} count={product.count} />
                    ))}
                    <TableRow>
                        <TableCell colSpan={2}>Итоговая цена</TableCell>
                        <TableCell align="right">{getTotalSum(cart)} р.</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CartTable