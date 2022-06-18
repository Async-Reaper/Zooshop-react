import styled from '@emotion/styled';
import { Modal } from '@mui/material'
import React, { FC } from 'react'
import cl from './ModalWindow.module.scss'

interface IModalWindowProps {
    children: any;
    openModal: boolean;
    closeModal: () => void
}

const ModalStyled = styled(Modal)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

const ModalWindow: FC<IModalWindowProps> = ({children, openModal, closeModal}) => {

    return (
        <div>
            <ModalStyled
                open={openModal}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className={cl.ModalContent}>
                    { children }
                </div>
            </ModalStyled>
        </div>
    )
}

export default ModalWindow