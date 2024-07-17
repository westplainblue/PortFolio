import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";




const ProfileList: React.FC = () => {
    return(
        <>
        <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12} md={12} sx={{ textAlign: "center"}}>
                <Typography component="h2" variant="h2">
                    Profile
                </Typography>
            </Grid>
             <Grid item xs={12} md={4}>
                 <Box sx={{ width: "100%"}}>
                    <img style={{ width: "100%", height: "auto", borderRadius: "40%"}} src="/images/common/IMG_4704.jpeg"/>
                </Box>
            </Grid>
                 <Grid item xs={12} md={8}>
                    <Box sx={{ width: "100%", paddingLeft: {sx: "0px", md: "30px"} }}>
                        <Typography variant="body2" color="text.secondary">
                            <p>私は東京国際工科専門職大学の学生で、現在就職活動中です。</p>
                            <p>大学での4年間、主にAIに関する学習と開発に取り組んできました。特にPythonを使用したプロジェクトに力を入れてきましたが、C、C++、Java、MySQLなどのプログラミング言語にも触れてきました。また、独学でHTML/CSS、JavaScript、TypeScript、Swiftなどの言語も学びました。</p>
                            <p>このポートフォリオサイトは、Reactを用いて自分でデザインし、開発しました。</p>
                            <p></p>
                        </Typography>
                     </Box>
                </Grid>
             <Grid item xs={12} md={12} sx={{ textAlign: "center"}}>
                <Button variant="contained" size="large">
                     LernMore
                </Button>
            </Grid>
         </Grid>
                
        </>
    );
};

export default ProfileList;