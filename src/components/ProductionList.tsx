import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MediaCard from "./MediaCard";


const ProductionList: React.FC = () => {
    const setMediaList = [
        {
            'title': "タイトル１",
            'description': "タイトル１の説明",
            'image': "/images/production/sample1.png",
            'Link': "sample2"
        },
        {
            'title': "タイトル2",
            'description': "タイトル2の説明",
            'image': "/images/production/sample2.png",
            'Link': "sample2"
        },
        {
            'title': "タイトル3",
            'description': "タイトル3の説明",
            'image': "/images/production/sample3.png",
            'Link': "sample3"
        },
        
    ];
    return(
        <>

                    <Grid container rowSpacing={2} columnSpacing={2}>
                        <Grid item xs={12} md={12} sx={{ textAlign: "center"}}>
                            <Typography component="h2" variant="h2">
                                Production
                            </Typography>
                        </Grid>
                        {setMediaList.map((data) => {
                            return(
                                <Grid item xs={12} md={4}>
                                    <Box sx={{width: "100%"}}>
                                    <MediaCard title={data.title} description={data.description} image={data.image} Link={data.Link}/>
                                    </Box>
                                 </Grid>

                            );
                        })}

                        <Grid item xs={12} md={12} sx={{ textAlign: "center"}}>
                            <Button variant="contained" size="large">
                                LernMore
                            </Button>
                        </Grid>
                    </Grid>
        </>
    );
};

export default ProductionList ;