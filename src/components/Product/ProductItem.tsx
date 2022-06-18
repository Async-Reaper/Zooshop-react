import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Button } from '@mui/material';
import React, { FC } from 'react';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ICart } from '../../models/ICart';
import { IProduct } from '../../models/IProduct';
import { addToCart } from '../../store/reducers/cartSlice';
import { setCountProduct } from '../../utils/setCountProduct';
import DisabledButton from './DisabledButton';
import cl from './ProductItem.module.scss';

interface IProductItem {
    product: IProduct
    img: string
}


const ProductItem: FC<IProductItem> = ({img, product}) => {
    const dispatch = useTypedDispatch()
    const { cart } = useTypedSelector(state => state.cart)
    const { loginStatus } = useTypedSelector(state => state.login)
    const newProductCart: ICart ={
        id: Date.now(),
        count: 1,
        name: product.name,
        price: product.price
    }

    
    if (!localStorage.getItem('cart')) localStorage.setItem('cart', JSON.stringify(cart))
    
    

    const addCart = () => {
        dispatch(addToCart(newProductCart))
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
                <Button disabled={!loginStatus} variant="contained" onClick={() => addCart()}>
                    В корзину
                    <ShoppingCartOutlinedIcon />
                </Button>
            }
        </div>
    )
}

export default ProductItem