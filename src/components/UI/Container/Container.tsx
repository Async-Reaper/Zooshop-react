import React, { FC } from 'react'
import styled from '@emotion/styled';

interface ContainerAppProps {
    children: any
}

const Container = styled('div')({
    maxWidth: 1270,
    padding: '0 15px',
    margin: '0 auto'
})

const ContainerApp: FC<ContainerAppProps> = ({children}) => {
    return (
        <Container>{children}</Container>
    )
}

export default ContainerApp