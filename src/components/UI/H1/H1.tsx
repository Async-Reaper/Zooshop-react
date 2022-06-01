import styled from '@emotion/styled'
import React, { FC } from 'react'

interface IH1Props {
    children: string
}

const Title = styled('h1')({
    color: '#3f51b5',
    fontWeight: 300,
})

const H1: FC<IH1Props> = ({children}) => {
    return (
        <Title>{children}</Title>
    )
}

export default H1