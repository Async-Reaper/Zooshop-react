import { Button } from '@mui/material'
import React, { FC } from 'react'
import { IProduct } from '../../models/IProduct'
import cl from './ProductItem.module.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ICart } from '../../models/ICart';
import { addToCart } from '../../store/reducers/cartSlice';
import { setCountProduct } from '../../utils/setCountProduct';
import DisabledButton from './DisabledButton';

interface IProductItem {
    product: IProduct
    img: string
}


const ProductItem: FC<IProductItem> = ({img, product}) => {
    const dispatch = useTypedDispatch()
    const { cart } = useTypedSelector(state => state.cart)

    const newProductCart: ICart ={
        id: Date.now(),
        count: 1,
        name: product.name,
        price: product.price
    }

    const addCart = () => {
        dispatch(addToCart(newProductCart))
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    return (
        <div className={cl.ProductItemWrapper}>
            <img src={img} alt="" />
            <div className={cl.ProductNameWrapper}>
                <span>{product.name}</span>
            </div>
            <div className={cl.ProductPriceWrapper}>
                <p>{product.price} ₽</p>
            </div> 
            {
                setCountProduct(JSON.parse(localStorage.getItem('cart') || ''), newProductCart) ? 
                <DisabledButton /> :
                <Button variant="contained" onClick={() => addCart()}>
                    В корзину
                    <ShoppingCartOutlinedIcon />
                </Button>
            }
        </div>
    )
}

export default ProductItem