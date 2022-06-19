import React, { FC } from 'react'
import { useTypedDispatch } from '../../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { setStateCartSuccessBuy } from '../../../store/reducers/modalWindowsSlice'
import ModalWindow from '../../UI/ModalWindow/ModalWindow'

const CartSuccessBuy: FC = () => {
    const { cartSuccessBuy } = useTypedSelector(state => state.modalWindows)
    const dispatch = useTypedDispatch()
    return (
        <ModalWindow openModal={cartSuccessBuy} closeModal={() => dispatch(setStateCartSuccessBuy(false))} >
            <div>
                Покупка прошла успешно
            </div>
        </ModalWindow>
    )
}

export default CartSuccessBuy