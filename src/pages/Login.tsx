import styled from '@emotion/styled'
import React, { FC } from 'react'
import LoginForm from '../components/Forms/LoginForm'

const LoginWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 35
})

const Login: FC = () => {
  return (
    <LoginWrapper>
      <LoginForm />
    </LoginWrapper>
  )
}

export default Login