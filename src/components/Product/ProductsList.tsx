import React, { useEffect } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import getAllProducts from '../../services/ProductsService'
import ContainerApp from '../UI/Container/Container'
import img from '../../img/Игрушка для кошек.jpg'

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
                    <img src={img} alt="" />
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                </div>
            )}
        </ContainerApp>
    )
}

export default ProductsList