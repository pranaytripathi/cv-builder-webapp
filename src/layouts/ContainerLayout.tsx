import Container from '@mui/material/Container';
import React from 'react';

interface ContainerLayoutProps {
    children: React.ReactNode
}

export default function ContainerLayout(
    { children } : ContainerLayoutProps) {
    return <Container maxWidth="lg">{children}</Container>
};