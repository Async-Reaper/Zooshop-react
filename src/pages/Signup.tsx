import styled from '@emotion/styled'
import React, { FC } from 'react'
import SignupForm from '../components/Forms/SignupForm'

const SignupWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
})

const Signup: FC = () => {
  return (
    <SignupWrapper>
      <SignupForm />
    </SignupWrapper>
  )
}

export default Signup