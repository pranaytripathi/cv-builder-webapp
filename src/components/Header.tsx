import { ComputerOutlined } from '@mui/icons-material';
import { Box, Link } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';

export default function Header() {
    return <Grid container spacing={12}>
            <Grid xs={6}>
                <ComputerOutlined/>
            </Grid>
            <Grid xs={2}>
                About
            </Grid>
            <Grid xs={2}>
                Contact
            </Grid>
            <Grid xs={2}>
                Testimonials
            </Grid>
        </Grid>
};