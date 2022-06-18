import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React, { FC } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { clearCart } from '../../store/reducers/cartSlice'

const ButtonsWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '15px 0'
})

const ButtonsCart: FC = () => {
    const dispatch = useTypedDispatch()

    return (
        <ButtonsWrapper>
            <Button variant='outlined'>Оформить заказ</Button>
            <Button variant='outlined' onClick={() => dispatch(clearCart())} >Очистить корзину</Button>
        </ButtonsWrapper>
    )
}

export default ButtonsCart