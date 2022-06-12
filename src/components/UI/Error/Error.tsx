import styled from '@emotion/styled'
import React, { FC } from 'react'

const ErrorText = styled('div')({
    maxWidth: 282,
    color: '#f50057',
    fontSize: 15
})

interface IErrorProps {
    children: string
}

const Error: FC<IErrorProps> = ({children}) => {
    return (
        <ErrorText>* {children}</ErrorText>
    )
}

export default Error