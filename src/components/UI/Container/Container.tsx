import React, { FC } from 'react'
import Container from '@mui/material/Container';

interface ContainerAppProps {
    children: any
}

const ContainerApp: FC<ContainerAppProps> = ({children}) => {
    return (
        <Container maxWidth="sm">{children}</Container>
    )
}

export default ContainerApp