import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { FC, useMemo, useState } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { ICart } from '../../models/ICart'
import { clearCart } from '../../store/reducers/cartSlice'
import { setStateCartSuccessBuy } from '../../store/reducers/modalWindowsSlice'

const ButtonsWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '15px 0'
})

interface IButtonsCartProps {
    cart: ICart[]
}
const ButtonsCart: FC<IButtonsCartProps> = ({cart}) => {
    const dispatch = useTypedDispatch()
    const [cartStatus, setCartStatus] = useState<boolean>(false)

    useMemo(() => {
    
        if (cart.length === 0) {
            setCartStatus(true)
        }
    
    }, [cart])
    
    return (
        <ButtonsWrapper>
            <Button disabled={ cartStatus} variant='outlined' onClick={() => dispatch(setStateCartSuccessBuy(true))} >Оформить заказ</Button>
            <Button disabled={ cartStatus} variant='outlined' onClick={() => dispatch(clearCart())} >Очистить корзину</Button>
        </ButtonsWrapper>
    )
}

export default ButtonsCart