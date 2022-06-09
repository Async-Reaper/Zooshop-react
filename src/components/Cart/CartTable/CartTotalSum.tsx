import React, { FC, useMemo } from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { getTotalSum } from '../../../utils/getTotalSum';
import { ICart } from '../../../models/ICart';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { getTotalPrice } from '../../../store/reducers/cartSlice';

interface ICartTotalSumProps {
    cart: ICart[]
    totalPrice: number
}

const CartTotalSum: FC<ICartTotalSumProps> = ({cart, totalPrice}) => {
    const dispatch = useTypedDispatch()
    const totalSum = useMemo(() => dispatch(getTotalPrice()), [cart, totalPrice])

    return (
        <TableRow>
            <TableCell colSpan={2}>Итоговая цена</TableCell>
            <TableCell align="right">{totalPrice} р.</TableCell>
        </TableRow>
    )
}

export default CartTotalSum