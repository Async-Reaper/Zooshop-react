import React, { useEffect } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import getAllProducts from '../../services/ProductsService'
import ContainerApp from '../UI/Container/Container'
import img from '../../img/Игрушка для кошек.jpg'
import styled from '@emotion/styled'
import ProductItem from './ProductItem'
import { Skeleton } from '@mui/material'

const ProductWrapper = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr',
    gridAutoflow: 'row',
    gridGap: '20px',
    marginBottom: 20
})

const ProductsList = () => {
    const {loading, products} = useTypedSelector(state => state.product)
    const dispatch = useTypedDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    return (
        <ContainerApp>
            {loading &&  <Skeleton variant="rectangular" width={250} height={416} />}
            <ProductWrapper>
                {products && products.map((product) => 
                    <ProductItem key={product.id} img={img} product={product} />
                )}
            </ProductWrapper>
        </ContainerApp>
    )
}

export default ProductsList