import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';

interface ExperiencePropTypes{
    title: string;
    company: string;
    date: string;
    descriptionList: string[];
    skills: string[];
}

export default function Experience({ experience } : { experience: ExperiencePropTypes[] }) {
    return <Grid container spacing={8}>
        {experience?.map?.((x: ExperiencePropTypes, index : number) =>
            <Grid xs={6} key={index}>
                <Card sx={{ minWidth: "50%", backgroundColor: "#d0d1d3", height: "100%" }}>
                    <CardContent>
                        <Typography variant="h5" component="div" gutterBottom>
                            {x.title}
                        </Typography>
                        <Typography fontSize={16}>
                            {x.company}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {x.date}
                        </Typography>s
                        <Typography variant="body2" component="div">
                            <ul>
                                {x.descriptionList.map((d: string, index: number) =>
                                    <li key={index}>
                                        {d}
                                    </li>)}
                            </ul>
                        </Typography>
                        <Typography component="div">
                            Certifications
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        )}
    </Grid>;
}