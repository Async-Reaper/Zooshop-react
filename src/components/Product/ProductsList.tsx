import React, {useEffect} from 'react'
import {useTypedDispatch} from '../../hooks/useTypedDispatch'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import getAllProducts from '../../services/ProductsService'
import ContainerApp from '../UI/Container/Container'
import styled from '@emotion/styled'
import ProductItem from './ProductItem'
import {Skeleton} from '@mui/material'
import Loader from "../UI/Loader/Loader";

const ProductWrapper = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr',
    gridAutoFlow: 'row',
    gridGap: '20px',
    marginBottom: 20,
    '@media (max-width: 840px)': {
        gridTemplateColumns: '1fr 1fr'
    },
    '@media (max-width: 565px)': {
        gridTemplateColumns: '1fr'
    }
})

const ProductsList = () => {
    const {loading, products} = useTypedSelector(state => state.product)
    const dispatch = useTypedDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    return (
        <ContainerApp>
            {loading && <Loader/>}
            <ProductWrapper>
                {products && products.map((product) =>
                    <ProductItem key={product.id} product={product}/>
                )}
            </ProductWrapper>
        </ContainerApp>
    )
}

export default ProductsList