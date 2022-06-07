import React, { FC } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { setStateCartModal } from '../../store/reducers/modalWindowsSlice'
import ModalWindow from '../UI/ModalWindow/ModalWindow'

const Cart: FC = () => {
    const { cartModal } = useTypedSelector(state => state.modalWindows)
    const dispatch = useTypedDispatch()

    return (
        <ModalWindow openModal={cartModal} closeModal={() => dispatch(setStateCartModal(false))} > 
            <div>
                entry content
            </div>
        </ModalWindow>
    )
}

export default Cart