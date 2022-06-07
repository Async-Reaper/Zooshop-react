import { Button } from '@mui/material'
import React, { FC } from 'react'
import { IProduct } from '../../models/IProduct'
import cl from './ProductItem.module.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import { ICart } from '../../models/ICart';

interface IProductItem {
    product: IProduct
    img: string
}


const ProductItem: FC<IProductItem> = ({img, product}) => {
    const dispatch = useTypedDispatch()

    const newProductCart: ICart ={
        id: Date.now(),
        count: 1,
        name: product.name,
        price: product.price
    }

    const addToCart = () => {

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
            <Button variant="contained">
                В корзину
                <ShoppingCartOutlinedIcon />
            </Button>
        </div>
    )
}

export default ProductItem