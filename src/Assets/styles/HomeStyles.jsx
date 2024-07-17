import { Margin } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

export const RecommendedSellersStyles = makeStyles({
  container: {
    backgroundColor: "#E9E4DE",
    borderRadius: "10px",
    paddingBottom: "3rem",
  },
  titlesContainer: {
    padding: "1rem",
    "& .mainTitle": {
      color: "#1D3A76",
      fontSize: "1.8rem",
      fontWeight: 700,
    },
    "& .subTitle": {
      color: "#878787",
      fontSize: "1.1rem",
      fontWeight: 400,
    },
  },
  cardsContainer: {
    backgroundColor: "#FBF5F1",
    padding: "2rem",
  },
  sellerCardContainer: {
    display: "flex",
    gap: "1.5rem",
    "&.MuiPaper-root": {
      background: "transparent",
    },
    "& .sellerImage": {
      width: "140px",
      height: "140px",
      objectFit: "cover",
      boxShadow: "-6.63px -5.31px 3.32px 3.32px #00000040",
      marginTop: "10px",
      marginLeft: "10px",
    },
    "& .sellerDetailsContainer": {
      minWidth: "160px",
      height: "140px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      //   gap: "1rem",
      "& .title": {
        color: "#000000",
        fontWeight: 600,
        fontSize: "1.2rem"
      },
      "& .role": {
        color: "#1D3A76",
        fontWeight: 600,
        fontSize: "0.9rem"
      },
      "& .experience": {
        color: "#878787",
        fontWeight: 600,
        fontSize: "0.9rem"
      },
      "& .Properties": {
        color: "#878787",
        fontWeight: 600,
        fontSize: "0.9rem"
      },
      "& .address": {
        color: "#878787",
        fontWeight: 600,
        fontSize: "0.9rem"
      },
    },
  },
});

export const LoginStyles = makeStyles({
  tabStyles: {
    backgroundColor: "#31539A",
    borderRadius: "1rem 2.5rem 0rem 0rem",
    "& .MuiTabs-flexContainer": {
      gap: "0.4rem"
    },
    "& .MuiTabs-indicator": {
      display: "none"
    },
    "& .MuiTab-root": {
      padding: "1rem",
      minWidth: "100px",
      alignItems: "start",
      backgroundColor: "#31539A",
      textTransform: "none",
      fontSize: "1rem",
      fontWeight: 700,
      color: "#FFFFFF",
      borderTopRightRadius: "2.5rem",
      boxShadow: "4px 0px 4px 0px #00000040",
    },
    "& .Mui-selected": {
      backgroundColor: "#FBAF01",
      color: "#31539A"
    },
  },
  tabPanelStyles: {
    backgroundColor: "#FFFFFF",
    borderRadius: "0rem 0rem 1.5rem 1.5rem",
    boxShadow: "0px 4px 4px 0px #00000040",
  }
})
