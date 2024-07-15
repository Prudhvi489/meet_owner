import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import SftIcon from "./icons/SftIcon";
import HouseIcon from "./icons/HouseIcon";
import BhkIcon from "./icons/BhkIcon";
import FavIcon from "./icons/FavIcon";
import ShareIcon from "./icons/ShareIcon";

const BestPropertiesCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: "1rem",
        boxShadow: "0px 0px 21.77px 10.89px #00000040",
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
          position={"absolute"}
          sx={{ bottom: 0, left: 0, width: "100%", padding: "1rem" }}
        >
          <Typography
            sx={{
              fontSize: "2rem",
              color: "#FFFFFF",
              fontWeight: 700,
              textShadow: "1px 2px 4px #000000",
            }}
          >
            Lakescape
          </Typography>
          <Grid container>
            <Grid
              item
              xs
              sx={{
                fontSize: "1.3rem",
                color: "white",
                fontWeight: 400,
                textShadow: "1px 2px 4px #000000",
              }}
            >
              Kondapur, Telangana, India.
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
      </Grid>
      <CardContent>
        <Grid container direction={"column"} gap={2}>
          <Grid
            item
            container
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Grid item xs={"auto"} container alignItems={"center"} gap={1}>
              <SftIcon /> 2200 Sft.
            </Grid>
            <Grid item xs={"auto"} container alignItems={"center"} gap={1}>
              <HouseIcon /> East Facing.
            </Grid>
            <Grid item xs={"auto"} container alignItems={"center"} gap={1}>
              <BhkIcon /> 3 BHK.
            </Grid>
          </Grid>
          <Grid item container justifyContent={"space-between"}>
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
        </Grid>
      </CardContent>
    </Card>
  );
};

export default BestPropertiesCard;
