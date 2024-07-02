import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import MV from "../../assets/images/mv.jpg";
import RadarChart from "./RadarChart";
import { Legend } from "chart.js";

const SkillList: React.FC = () => {

     const setSkillLists = [
        {
        labels: ['HTML / CSS', 'JavaScript', 'TypeScript', 'Next.js', 'React', 'other'],
        datasets: [{
                    label: 'Front-End',
                    data: [3, 3, 2, 2, 2, 2],
                    fill: true,
                    backgroundColor: 'rgb(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1.0)'
                }],
        },
            {
            labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6' ],
            datasets: [{
                        label: '# of Votes',
                        data: [2, 9, 3, 5, 2, 3],
                        backgroundColor: 'rgb(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        boderWidth: 1,
                    }],
             },
             {
                labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6' ],
                datasets: [
                        {
                            label: '# of Votes',
                            data: [2, 9, 3, 5, 2, 3],
                            backgroundColor: 'rgb(255, 99, 132, 0.2)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                            boderWidth: 1,
                        },
                    ],
                 },
    ];

    const setSkillChartOptions = {
        responsive: false,
        maintainAspectRation: true,
        plugin: {
            legend: {
                display: false
            }
        },
        scales: {
            r: {
                max: 3,
                min: 0,
                ticks: {
                    stepSize: 1
                }
            }
        }
    }

    return(
        <>
        <Grid item xs={12} md={12} sx={{ textAlign: "center"}}>
                            <Typography component="h2" variant="h2">
                                スキル
                            </Typography>
                        </Grid>
                        {setSkillLists.map((data) => {
                            return (
                            <Grid item xs={12} md={4}>
                                <Box sx={{ width: "100%", height: {xs: "400px", md: "200px"} }}>
                                    <RadarChart options={setSkillChartOptions} data={data}/>
                                </Box>
                            </Grid>
                            );
                        
                        })}
                        
                        <Grid item xs={12} md={12} sx={{ textAlign: "center"}}>
                            <Button variant="contained" size="large">
                                LernMore
                            </Button>
                        </Grid>
        </>
    )
}

export default SkillList;                        
