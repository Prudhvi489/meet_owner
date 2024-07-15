import { Grid, Stack, Container } from "@mui/material";
import React from "react";
import { images } from "../../Config/Imageexports";
const Footer = () => {
  return (
    <>
      <Stack>
        <Grid item p={1}>
          <img src={images.logo} alt="footerimg" />
        </Grid>
        <Grid
          item
          container
          justifyContent={"flex-end"}
          sx={{ background: "#1D3A76" }}
        >
          <Grid container item direction={"column"} md={4} spacing={2} sx={{borderLeft:'1px solid #ffffff',height:'100%',padding:'1rem'}}>
            <Grid item container textAlign={"center "} alignItems={"center"} >
              <Grid item md={7}>
                <img src={images.barcodeimg} alt="barcode" width={"50%"} />
              </Grid>
              <Grid item md={4} sx={{color:'#ffffff'}}>
                Open Camera & Scan the QR Code to Download the App
              </Grid>
            </Grid>
            <Grid
              item
              textAlign={"center"}
              sx={{ color: "#ffffff", fontWeight: 600 }}
            >
              EXPERIENCE MEET OWNER APP ON MOBILE
            </Grid>
            <Grid item container textAlign={"right"}>
              <Grid item md={6}>
                <img src={images.googleplay} width={"70%"} />
              </Grid>
              <Grid item md={6}>
                <img src={images.appstore} width={"70%"} />
              </Grid>
            </Grid>
            <Grid item textAlign={'center'} ml={3} sx={{color:'#ffffff'}}>Copyright @ 2024 Meet Owner. All rights reserved</Grid>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default Footer;
