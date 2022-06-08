import { Button, Tooltip } from '@mui/material'
import React, { FC } from 'react'

const DisabledButton: FC = () => {
    return (
        <Button disabled variant='outlined'>Уже в корзине</Button>
    )
}

export default DisabledButton