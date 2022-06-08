import React, { FC, useMemo } from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { getTotalSum } from '../../../utils/getTotalSum';
import { ICart } from '../../../models/ICart';

interface ICartTotalSumProps {
    cart: ICart[]
}

const CartTotalSum: FC<ICartTotalSumProps> = ({cart}) => {
    const totalSum = useMemo(() => getTotalSum(cart), [cart])

    return (
        <TableRow>
            <TableCell colSpan={2}>Итоговая цена</TableCell>
            <TableCell align="right">{totalSum} р.</TableCell>
        </TableRow>
    )
}

export default CartTotalSum