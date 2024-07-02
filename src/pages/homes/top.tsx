import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { style } from "@mui/system";
import MV from "../../assets/images/mv.jpg"
import SkillList from "../../components/SkillList";
import ProductionList from "../../components/ProductionList";


const Top: React.FC = () => {
    return(
        <>
            <Box sx={ {height: "65vh", backgroundImage: "url(" + MV + ")", backgroundSize:"cover", backgroundPosition: "center", position: "relative" }}>
                <Container maxWidth="md" sx={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%) translateY(-50%)" }}>
                    <Grid container rowSpacing={2} columnSpacing={2} sx={{ textAlign: "center", color: "#FFFFFF", textShadow: "1px 1px 3px #000000" }}>
                        <Grid item xs={12} md={12}>
                            <Typography component="h2" variant="h2">
                                Aoi's PortFolio
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography>
                                東京国際工科専門職大学　工科学部　情報工学科
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
                <Button variant="contained" size="large" sx={{ position: "absolute", bottom: "10%", left: "50%", transform: "translateX(-50%)" }}>
                                LernMore
                </Button>
            </Box>
            <Box>
                <Container maxWidth="md">
                    <Grid container rowSpacing={2} columnSpacing={2}>
                        <SkillList />
                    </Grid>
                </Container>
            </Box>
            <Box>
                <Container maxWidth="md">
                    <ProductionList />
                </Container>
            </Box>
            <Box>
                <Container maxWidth="md">
                    <Grid container rowSpacing={2} columnSpacing={2}>
                        <Grid item xs={12} md={12} sx={{ textAlign: "center"}}>
                            <Typography component="h2" variant="h2">
                                Profile
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ height: 200, backgroundColor: "pink"}}>

                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Box sx={{ height: 200, backgroundColor: "pink"}}>

                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12} sx={{ textAlign: "center"}}>
                            <Button variant="contained" size="large">
                                LernMore
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box>
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
            </Box>
        </>
    );
};

export default Top;