import React from "react";
import { RecommendedSellersStyles } from "../Assets/styles/HomeStyles";
import { Grid, Typography } from "@mui/material";
import RecommendedSellersCard from "./RecommendedSellersCard";

const RecommendedSellers = () => {
  const jsxStyles = RecommendedSellersStyles();
  return (
    <Grid component={"section"} className={jsxStyles.container}>
      <Grid className={jsxStyles.titlesContainer}>
        <Typography className="mainTitle">Recommended Sellers</Typography>
        <Typography className="subTitle">
          Sellers With Complete Knowledge About Locality and Verified Listings{" "}
        </Typography>
      </Grid>
      <Grid className={jsxStyles.cardsContainer}>
        <Grid container rowGap={8} columnSpacing={2}>
          {[1, 2, 3, 4, 5].map((item) => {
            return (
              <Grid item md={4} lg={4} xl={3}>
                <RecommendedSellersCard />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RecommendedSellers;
