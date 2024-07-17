import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


const Top: React.FC = () => {
    return(
        <>
                <Container maxWidth="md">
                    <Grid container rowSpacing={2} columnSpacing={2}>
                        <Grid item xs={12} md={12} sx={{ textAlign: "center"}}>
                            <Typography component="h2" variant="h2">
                                Contact
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Box sx={{ height: 400, backgroundColor: "pink"}}>

                            </Box>
                        </Grid>
                    </Grid>
                </Container>
        </>
    );
};

export default Top;