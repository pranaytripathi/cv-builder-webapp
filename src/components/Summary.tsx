import { GitHub, LinkedIn, TextFieldsOutlined } from '@mui/icons-material';
import { Link, List, SvgIcon } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import Upwork from "../../public/upwork.svg";
import useFetchSummary from '@/hooks/useFetchSummary';
import { SummaryTypes } from '@/types/summary';

const style = {
    minWidth: "30%",
    height: "100%",
    backgroundColor: 'primary.dark',
    '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
    },
    color: "#070502"
};

export default function Summary() {
    const { summary } = useFetchSummary();
    return <Grid container spacing={12}>
        <Grid xs={4}>
            <Box sx={style} />
        </Grid>
        <Grid xs={8}>
            <Card sx={{ minWidth: "70%", height: "100%", backgroundColor: "#d0d1d3" }}>
                <CardContent sx={{ height: "70%" }}>
                <Typography sx={{ fontSize: 20, fontWeight: 700 }} color="text.primary" gutterBottom>
                        {summary?.name}
                    </Typography>
                    <Typography sx={{ fontSize: 18, fontWeight: 700 }} color="text.primary" gutterBottom>
                        {summary?.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {summary?.description}
                    </Typography>
                    <Typography sx={{ fontSize: 16, fontWeight: 700 }} color="text.primary" gutterBottom>
                        Skills
                    </Typography>
                    <Typography variant="body2">
                        {summary?.skills}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href="https://www.linkedin.com/in/pranay-tripathi-34627137/">
                        <LinkedIn />
                    </Link>
                    <Link href="https://github.com/pranaytripathi">
                        <GitHub />
                    </Link>
                    <Link href="https://www.upwork.com/freelancers/~01ace4455f7f4e5dcc">
                        <Upwork style={{ width: "25px", height: "25px" }} />
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    </Grid>
};