import React, { FC, useEffect } from 'react'
import ProductsList from '../components/Product/ProductsList'
import { useTypedDispatch } from '../hooks/useTypedDispatch'
import { useTypedSelector } from '../hooks/useTypedSelector'
import getAllProducts from '../services/ProductsService'

const Products: FC = () => {
    
    return (
        <ProductsList/>
    )
}

export default Products