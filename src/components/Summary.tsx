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

export default function Summary () {
    return <Grid container spacing={12}>
            <Grid xs={4}>
                <Box sx={style} />
            </Grid>
            <Grid xs={8}>
                <Card sx={{ minWidth: "70%", height: "100%", backgroundColor: "#d0d1d3"}}>
                    <CardContent sx={{ height: "70%" }}>
                        <Typography sx={{ fontSize: 20, fontWeight: 700 }} color="text.primary" gutterBottom>
                            Senior Software Engineer
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            I have been working in Software Development for 8+ years designing and developing backend api and frontend components.
                            I have a strong problem solving ability and I believe in team work and high collaboration. 
                            Expertise in developing performant micro-services based in Java and Node JS with high availabilty and high scalability.
                            I also have experience in developing fast and performant frontend components and microsites based in React and Typescript.
                        </Typography>
                        <Typography sx={{ fontSize: 16, fontWeight: 700 }} color="text.primary" gutterBottom>
                            Skills
                        </Typography>
                        <Typography variant="body2">
                            Java, Spring Boot, React, AWS, Typescript, NodeJS, GRPC, Rest API
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
                        <Upwork style={{ width: "25px", height: "25px"}}/>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
};