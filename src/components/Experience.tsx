import useFetchExperience from '@/hooks/useFetchExperience';
import { ExperienceTypes } from '@/types/experience';
import { Card, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';

export default function Experience() {
    const { experience } = useFetchExperience();
    return <Grid container spacing={8}>
        {experience?.map?.((x: ExperienceTypes, index: number) =>
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
                        </Typography>
                        <Typography variant="body2" component="div">
                            <ul>
                                {x.descriptionList.map((d: string, index: number) =>
                                    <li key={index}>
                                        {d}
                                    </li>)}
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        )}
    </Grid>;
}