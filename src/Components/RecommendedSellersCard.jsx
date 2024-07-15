import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { RecommendedSellersStyles } from "../Assets/styles/HomeStyles";
import LocationIcon from "./icons/LocationIcon";

const RecommendedSellersCard = () => {
    const jsxStyles = RecommendedSellersStyles();
  return (
    <Card className={jsxStyles.sellerCardContainer} elevation={0}>
      <CardMedia
        component="img"
        className="sellerImage"
        image="https://www.careeraddict.com/uploads/article/59099/illustration-man-suit.jpg"
        alt="Live from space album cover"
      />
      <Box className="sellerDetailsContainer">
        <Typography className="title">Sreya Vishwanadh</Typography>
        <Typography className="role">Housing Expert Pro</Typography>
        <Typography className="experience">Experience - 3 Year’s</Typography>
        <Typography className="Properties">Properties - 39</Typography>
        <Typography className="address"><LocationIcon /> Ameerpet /  SR Nagar</Typography>
      </Box>
    </Card>
  );
};

export default RecommendedSellersCard;
