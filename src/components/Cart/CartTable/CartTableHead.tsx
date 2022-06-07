import React, { FC } from 'react'
import TableHead from '@mui/material/TableHead';
import { TableCell, TableRow } from '@mui/material';

const CartTableHead: FC = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Название</TableCell>
                <TableCell align="right">Количество</TableCell>
                <TableCell align="right">Цена</TableCell>
            </TableRow>
        </TableHead>
    )
}

export default CartTableHead