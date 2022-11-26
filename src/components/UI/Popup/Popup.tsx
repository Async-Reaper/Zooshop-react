import React, { FC } from 'react'
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { closePopup } from '../../../store/reducers/signupSlice';
import {IPopupProps} from "./Popup.types";

const Popup: FC<IPopupProps> = ({children}) => {
    const { popupStatus } = useTypedSelector(state => state.signup)
    const dispatch = useTypedDispatch()

    return (
        <Collapse in={popupStatus}>
            <Alert
            action={
                <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                    dispatch(closePopup());
                }}
                >
                <CloseIcon fontSize="inherit" />
                </IconButton>
            }
            sx={{ mb: 2 }}
            >
                {children}
            </Alert>
        </Collapse>
    )
}

export default Popup