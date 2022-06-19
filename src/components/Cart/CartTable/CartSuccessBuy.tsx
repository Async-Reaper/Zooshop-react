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
                <p>Заказ оформлен успешно.</p>
                <p>Забирать заказ и оплачивать по адресу: г. Междуреченск, просп. Шахтёров, д. 37</p>
            </div>
        </ModalWindow>
    )
}

export default CartSuccessBuy