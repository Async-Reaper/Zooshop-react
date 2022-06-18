import { Button } from '@mui/material'
import React, { FC, memo } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { setStateCartModal } from '../../store/reducers/modalWindowsSlice'
import ModalWindow from '../UI/ModalWindow/ModalWindow'
import ButtonsCart from './ButtonsCart'
import CartTable from './CartTable/CartTable'

const MemoModalWindow = memo(ModalWindow)
const MemoButtonsCart = memo(ButtonsCart)
const Cart: FC = () => {
    const { cartModal } = useTypedSelector(state => state.modalWindows)
    const dispatch = useTypedDispatch()
    const { cart } = useTypedSelector(state => state.cart)
    
    return (
        <MemoModalWindow openModal={cartModal} closeModal={() => dispatch(setStateCartModal(false))} > 
            <div>
                <CartTable />
                <MemoButtonsCart cart={cart} />
            </div>
        </MemoModalWindow>
    )
}

export default Cart