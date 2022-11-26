import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import InfoCompany from '../pages/infoCompany/InfoCompany'
import Products from '../pages/productsPage/Products'

const PrivateRoute: FC = () => {
  return (
    <Routes>
      <Route path='/' element={ <InfoCompany/> } />
      <Route path='/products' element={ <Products/> } />
      <Route path='*' element={ <InfoCompany/> } />
    </Routes>
  )
}

export default PrivateRoute