import { TableCell, TableRow } from '@mui/material'
import React, { FC, useState } from 'react'

interface ICartTableProps {
    name: string;
    count: number;
    price: number;
}

const CartTableItem: FC<ICartTableProps> = ({name, count, price}) => {
    
    
    return (
        <TableRow
            key={name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {name}
            </TableCell>
            <TableCell align="right">
                <button>-</button>
                {count} шт.
                <button>+</button>
            </TableCell>
            <TableCell align="right">{price} р.</TableCell>
        </TableRow>
    )
}

export default CartTableItem