import { Button } from '@mui/material'
import React, { FC } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { setStateCartModal } from '../../store/reducers/modalWindowsSlice'
import ModalWindow from '../UI/ModalWindow/ModalWindow'
import ButtonsCart from './ButtonsCart'
import CartTable from './CartTable/CartTable'
const Cart: FC = () => {
    const { cartModal } = useTypedSelector(state => state.modalWindows)
    const dispatch = useTypedDispatch()

    
    return (
        <ModalWindow openModal={cartModal} closeModal={() => dispatch(setStateCartModal(false))} > 
            <div>
                <CartTable />
                <ButtonsCart />
            </div>
        </ModalWindow>
    )
}

export default Cart