import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import SftIcon from "./icons/SftIcon";
import HouseIcon from "./icons/HouseIcon";
import BhkIcon from "./icons/BhkIcon";
import FavIcon from "./icons/FavIcon";
import ShareIcon from "./icons/ShareIcon";
import BathingIcon from "./icons/BathingIcon";
import CarParkingIcon from "./icons/CarParkingIcon";

const LatestPropertiesCard = () => {
  return (
    <Grid sx={{ maxWidth: 400 }}>
      <Card
        sx={{
          maxWidth: 400,
          borderRadius: "1rem",
          boxShadow: "0px 0px 5px 5px #00000040",
        }}
      >
        <Grid position={"relative"}>
          <CardMedia
            sx={{ aspectRatio: "16 / 11", objectFit: "cover" }}
            image="https://www.investopedia.com/thmb/bfHtdFUQrl7jJ_z-utfh8w1TMNA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/houses_and_land-5bfc3326c9e77c0051812eb3.jpg"
            title="House"
            component={"img"}
          />
          <Grid
            item
            container
            justifyContent={"space-between"}
            position={"absolute"}
            sx={{ top: 0, left: 0, width: "100%", padding: "1rem" }}
          >
            <Grid item xs={"auto"}>
              <Button
                sx={{
                  backgroundColor: "#FBAF01",
                  color: "#000000",
                  fontSize: "0.8rem",
                  textTransform: "initial",
                  fontWeight: 700,
                  padding: "6px 12px",
                  minWidth: "auto",
                  boxShadow: "0px 0px 3px 2px #00000040",
                }}
              >
                Available
              </Button>
            </Grid>
            <Grid item xs={"auto"} container gap={1}>
              <FavIcon />
              <ShareIcon />
            </Grid>
          </Grid>
          <Grid
            position={"absolute"}
            sx={{ bottom: 0, left: 0, width: "100%", padding: "1rem 1.5rem" }}
            container
          >
            <Grid
              item
              xs
              sx={{
                fontSize: "1.3rem",
                color: "white",
                fontWeight: 700,
                textShadow: "1px 2px 4px #000000",
              }}
            >
              Property
            </Grid>
            <Grid
              item
              xs={"auto"}
              sx={{
                fontSize: "1.3rem",
                color: "white",
                fontWeight: 700,
                textShadow: "1px 2px 4px #000000",
              }}
            >
              Rs. 91 L
            </Grid>
          </Grid>
        </Grid>
        <CardContent
          sx={{
            padding: "0.5rem 2.5rem",
            paddingBottom: "4rem !important",
            position: "relative",
          }}
        >
          <Grid container direction={"column"} gap={2}>
            <Grid item container direction={"column"} gap={1}>
              <Grid
                item
                sx={{ fontSize: "2rem", fontWeight: 700, color: "#000000" }}
              >
                Lakescape
              </Grid>
              <Grid
                item
                sx={{ fontSize: "1.3rem", fontWeight: 600, color: "#1D3A76" }}
              >
                Address
              </Grid>
              <Grid
                item
                sx={{ fontSize: "1rem", fontWeight: 400, color: "#6D6C6C" }}
              >
                Kondapur, Telangana, India.
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6} container alignItems={"center"} gap={1}>
                <SftIcon /> 2200 Sft.
              </Grid>
              <Grid item xs={6} container alignItems={"center"} gap={1}>
                <HouseIcon /> East Facing.
              </Grid>
              <Grid item xs={6} container alignItems={"center"} gap={1}>
                <BhkIcon /> 3 BHK.
              </Grid>
              <Grid item xs={6} container alignItems={"center"} gap={1}>
                <CarParkingIcon /> Parking -1.
              </Grid>
              <Grid item xs={6} container alignItems={"center"} gap={1}>
                <BathingIcon /> 3 Bathroom.
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Grid sx={{ padding: "0rem 2.5rem", marginTop: "-2rem" }}>
        <Button
          sx={{
            backgroundColor: "#1D3A76",
            color: "#FFF",
            width: "100%",
            fontSize: "1.5rem",
            textTransform: "initial",
            borderRadius: "0.5rem",
          }}
        >
          Enquire Now
        </Button>
      </Grid>
    </Grid>
  );
};

export default LatestPropertiesCard;
