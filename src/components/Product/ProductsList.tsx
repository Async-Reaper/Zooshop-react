import React, { useEffect } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import getAllProducts from '../../services/ProductsService'
import ContainerApp from '../UI/Container/Container'

const ProductsList = () => {
    const {loading, products} = useTypedSelector(state => state.product)
    const dispatch = useTypedDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    
    return (
        <ContainerApp>
            {loading && <h1>Loading</h1>}
            {products && products.map((product) => 
                <div key={product.id}>
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                </div>
            )}
        </ContainerApp>
    )
}

export default ProductsList