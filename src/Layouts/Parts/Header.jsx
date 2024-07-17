import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { images } from "../../Config/Imageexports";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navItems = ["Home", "About", "Contact"];
  const navigate = useNavigate()
  return (
    <>
      <Container maxWidth={"xl"} sx={{background:'#ffffff'}}>
        <Grid
          container
          alignItems={"center"}
          sx={{ height: "88px" }}
          justifyContent={"space-between"}
        >
          <Grid item md={2}>
            <img src={images.logo} alt="logo" />
          </Grid>
          <Grid
            item
            container
            md={4}
            textAlign={"right"}
            alignItems={"center"}
          >
            <Grid item md={4}>
              <Stack direction={'row'} spacing={1}>
                <Grid item><img src={images.appdownload}/></Grid>
                <Typography sx={{fontSize:'16px',fontWeight:600,color:'#1D3A76'}}> Download App</Typography>
              </Stack>
            </Grid>
            <Grid item md={4}>
            <Stack direction={'row'} spacing={1} mt={1}>
                <Grid item><img src={images.addproperty}/></Grid>
                <Typography sx={{fontSize:'16px',fontWeight:600,color:'#1D3A76'}}>Add Property</Typography>
              </Stack>
            </Grid>
            <Grid item md={4}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#1D3A76!important",
                  textTransform: "none",
                  fontSize: "16px",
                  borderRadius: "0.5rem",
                }}
                startIcon={
                  <img src={images.profileicon} alt="icon" width={"70%"} />
                }
                onClick={()=>navigate("/login")}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Header;
