import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import InfoCompany from '../pages/InfoCompany'
import Products from '../pages/Products'

const PrivateRoute: FC = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route path='/company' element={ <InfoCompany/> } />
        <Route path='/products' element={ <Products/> } />
        <Route path='*' element={ <InfoCompany/> } />
      </Route>
    </Routes>
  )
}

export default PrivateRoute