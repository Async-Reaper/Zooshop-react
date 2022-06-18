import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React, { FC } from 'react'

const ButtonsWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '15px 0'
})

const ButtonsCart: FC = () => {
    return (
        <ButtonsWrapper>
            <Button variant='outlined'>Оформить заказ</Button>
            <Button variant='outlined'>Очистить корзину</Button>
        </ButtonsWrapper>
    )
}

export default ButtonsCart