import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Button } from '@mui/material';
import React, { FC } from 'react';
import { setCountProduct } from '../../utils/setCountProduct';
import DisabledButton from './DisabledButton';
import cl from './ProductItem.module.scss';
import { IProduct } from "../../models/IProduct";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ICart } from "../../models/ICart";
import { addToCart } from "../../store/reducers/cartSlice";

interface IProductItem {
    product: IProduct
}


const ProductItem: FC<IProductItem> = ({product}) => {
    const dispatch = useTypedDispatch()
    const { cart } = useTypedSelector(state => state.cart)
    const { loginStatus } = useTypedSelector(state => state.login)
    const newProductCart: ICart ={
        id: Date.now(),
        count: 1,
        name: product.name,
        price: product.price
    }
    

    const addCart = () => {
        dispatch(addToCart(newProductCart))
    }
    
    return (
        <div className={cl.ProductItemWrapper}>
            <img src={product.img} alt="" />
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
