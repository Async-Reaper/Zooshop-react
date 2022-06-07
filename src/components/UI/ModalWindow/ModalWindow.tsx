import { Modal } from '@mui/material'
import React, { FC } from 'react'
import { useTypedDispatch } from '../../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { setStateCartModal } from '../../../store/reducers/modalWindowsSlice'

interface IModalWindowProps {
    children: any
}

const ModalWindow: FC<IModalWindowProps> = ({children}) => {
    const { cartModal } = useTypedSelector(state => state.modalWindows)
    const dispatch = useTypedDispatch()

    return (
        <div>
            <Modal
                open={cartModal}
                onClose={() => dispatch(setStateCartModal(false))}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {
                    children
                }
            </Modal>
        </div>
    )
}

export default ModalWindow