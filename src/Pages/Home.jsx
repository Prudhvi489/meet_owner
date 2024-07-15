import React from "react";
import { images } from "../Config/Imageexports";
import {
  Grid,
  Typography,
  Tab,
  TextField,
  Container,
  InputAdornment,
  Stack,
  Button,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import { searchbar } from "../Styles/Homestyles";
import LatestPropertiesCard from "../Components/LatestPropertiesCard";
import BestPropertiesCard from "../Components/BestPropertiesCard";
import { CheckBox } from "@mui/icons-material";
import RecommendedSellers from "../Components/RecommendedSellers";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [housing, setHousing] = React.useState(1);
  const [latestpropertiestab, setLatestpropertiestab] =
    React.useState("latest");
  return (
    <>
      {/* Home Banner */}
      <Grid
        container
        sx={{
          backgroundImage: `url(${images.homebanner})`,
          height: "1000px",
          width: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container maxWidth="md">
          <Grid item container direction={"column"} sx={{ marginTop: "35%" }}>
            <Grid item>
              <Typography
                variant="h4"
                sx={{ fontWeight: "600", color: "white" }}
              >
                Properties to buy
              </Typography>
            </Grid>
            <Grid item textAlign={"center"} mt={4}>
              <TabContext value={housing}>
                <TabList
                  onChange={(event, newvalue) => setHousing(newvalue)}
                  sx={searchbar.tabstyles}
                >
                  <Tab
                    disableRipple
                    value={1}
                    label="Buy"
                    sx={{ textTransform: "none" }}
                  />
                  <Tab
                    disableRipple
                    value={2}
                    label="Rent"
                    sx={{ textTransform: "none" }}
                  />
                  <Tab
                    disableRipple
                    value={3}
                    label="Plot"
                    sx={{ textTransform: "none" }}
                  />
                  <Tab
                    value={4}
                    label="Commercial"
                    sx={{ textTransform: "none" }}
                  />
                </TabList>
                <Grid item>
                  <TextField
                    fullWidth
                    size={"small"}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        background: `white!important`,
                        borderRadius: `0.5rem 1.3rem 1.3rem 0.5rem`,
                        padding: "0.3rem",
                        height: `5.5rem`,
                        "& fieldset": {
                          border: "none", // Remove the border
                        },
                      },
                      "& .MuiOutlinedInput-input:-webkit-autofill": {
                        "-webkit-box-shadow": `0 0 0 30px black
                  } inset !important`,
                        background: "transparent !important",
                      },
                      // borderRadius:`${input_radius}`,
                      border: "none!important",
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          Hyderabad <KeyboardArrowDownIcon />{" "}
                          <PinDropOutlinedIcon />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end" onClick={()=>{navigate("/home/properties")}}>
                          <Grid
                            item
                            sx={{
                              background: "#1D3A76",
                              padding: "1rem 1.3rem",
                              borderRadius: "0.4rem 1.3rem 1.3rem 0.4rem",
                            }}
                          >
                            <img
                              src={images.searchicon}
                              alt="search"
                              width={"100%"}
                              height={"100%"}
                            />
                          </Grid>
                        </InputAdornment>
                      ),
                    }}
                    placeholder="Search for Locality"
                  />
                </Grid>
              </TabContext>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="lg">
          <Grid
            container
            sx={{
              backgroundColor: "#FBAF01",
              height: "5.5rem",
              borderRadius: "1rem",
              marginTop: "25%",
            }}
          >
            <Grid
              item
              md={2.5}
              container
              alignItems={"center"}
              sx={{
                backgroundColor: "white",
                borderRadius: "1rem 0rem 0rem 1rem",
              }}
              justifyContent={"center"}
            >
              <img src={images.logo} alt={"logo"} />
            </Grid>
            <Grid
              container
              item
              md={6}
              alignItems={"center"}
              spacing={2}
              justifyContent={"center"}
              sx={{ fontWeight: "600", color: "#1D3A76" }}
            >
              <Grid item>Home</Grid>
              <Grid item>About</Grid>
              <Grid item>Services</Grid>
              <Grid item>Careers</Grid>
              <Grid item>Help</Grid>
            </Grid>
            <Grid
              item
              container
              direction={"column"}
              md={2}
              spacing={1}
              textAlign={"center"}
              mt={1}
            >
              <Grid item>
                <Stack direction={"row"} spacing={1}>
                  <Grid item>
                    <img src={images.watsapp} alt={"watsapp"} />
                  </Grid>
                  <Grid item sx={{ fontSize: "1rem", fontWeight: 600 }}>
                    +91 - 9701888071
                  </Grid>
                </Stack>
              </Grid>
              <Grid item>
                <Stack direction={"row"} spacing={1}>
                  <Grid item>
                    <img src={images.mail} alt={"watsapp"} />
                  </Grid>
                  <Grid item sx={{ fontSize: "1rem", fontWeight: 600 }}>
                    sales@fortunegreenhomes.com
                  </Grid>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Container maxWidth="xl">
        <Grid
          container
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ marginTop: "5rem" }}
        >
          <Grid item>
            <span
              style={{ fontWeight: "600", color: "#1D3A76", fontSize: "64px" }}
            >
              Latest Properties
            </span>
          </Grid>
          <Grid item mt={1}>
            <Button sx={{ color: "white", backgroundColor: "#1D3A76" }}>
              View All
            </Button>
          </Grid>
        </Grid>
        <Grid item sx={{ color: "#878787" }}>
          We have Properties in these Areas View a list of a Latest Properties
        </Grid>
        <Grid item mt={5}>
          <TabContext value={latestpropertiestab}>
            <TabList
              onChange={(event, newValue) => setLatestpropertiestab(newValue)}
              sx={searchbar.latestproperties}
            >
              <Tab
                disableRipple
                sx={{ textTransform: "none" }}
                value={"latest"}
                label="Latest"
              />
              <Tab
                disableRipple
                sx={{ textTransform: "none" }}
                value={"sell"}
                label="Sell"
              />
              <Tab
                disableRipple
                sx={{ textTransform: "none" }}
                value="rent"
                label="Rent"
              />
            </TabList>
            <TabPanel value="latest">
              <Grid container justifyContent={"space-between"}>
                {[1, 2, 3].map((item, index) => {
                  return <LatestPropertiesCard />;
                })}
              </Grid>
            </TabPanel>
          </TabContext>
        </Grid>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ marginTop: "5rem" }}
        >
          <Grid item>
            <span
              style={{ fontWeight: "600", color: "#1D3A76", fontSize: "64px" }}
            >
              Best Deal Properties
            </span>
          </Grid>
          <Grid item mt={1}>
            <Button sx={{ color: "white", backgroundColor: "#1D3A76" }}>
              View All
            </Button>
          </Grid>
        </Grid>
        <Grid item sx={{ color: "#878787" }}>
          We have Properties in these Areas View a list of a Latest Properties
        </Grid>
        <Grid container justifyContent={"space-between"} mt={4}>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: "#1D3A76",
                borderRadius: "1rem",
                width: "140px",
              }}
              startIcon={<img src={images.leftarrow} />}
            >
              Previous
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: "#1D3A76",
                borderRadius: "1rem",
                width: "140px",
              }}
              endIcon={<img src={images?.rightarrow} />}
            >
              Next
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent={"space-between"} mt={5}>
          {[1, 2, 3].map((item, index) => {
            return <BestPropertiesCard />;
          })}
        </Grid>
        <Grid
          container
          sx={{
            backgroundImage: `url(${images.newsbg})`,
            width: "100%",
            marginTop: "10%",
          }}
        >
          <Grid item md={7}>
            <img
              src={images.newbuild}
              alt="building"
              width={"100%"}
              height={"100%"}
            />
          </Grid>
          <Grid item md={5} alignContent={"center"} spacing={2}>
            <Container maxWidth="md">
              <Stack spacing={2} sx={{ marginTop: "25%" }}>
                <Grid item>
                  <Typography variant="h4">Join our Newsletter</Typography>
                </Grid>
                <Grid item>
                  Be the first to receive the most recent news on our deals.
                </Grid>
                <Grid item>
                  <Stack direction={"row"}>
                    <CheckBox />
                    <Grid item>
                      I am okay with getting mails .................
                    </Grid>
                  </Stack>
                </Grid>
                <Grid item>
                  {" "}
                  <TextField
                    fullWidth
                    size={"small"}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        background: `white!important`,
                        borderRadius: `0.5rem`,
                        padding: "0px",
                        height: `4rem`,
                        "& fieldset": {
                          border: "none", // Remove the border
                        },
                      },
                      "& .MuiOutlinedInput-input:-webkit-autofill": {
                        "-webkit-box-shadow": `0 0 0 30px black
                  } inset !important`,
                        background: "transparent !important",
                      },
                      // borderRadius:`${input_radius}`,
                      border: "none!important",
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Grid
                            item
                            sx={{
                              background: "#1D3A76",
                              padding: "1rem 1.3rem",
                              borderRadius: "0rem 0.5rem 0.5rem 0rem",
                              color: "white",
                              fontWeight: 600,
                            }}
                          >
                            Sign Up
                          </Grid>
                        </InputAdornment>
                      ),
                    }}
                    placeholder="Enter Your Email Address"
                  />
                </Grid>
              </Stack>
            </Container>
          </Grid>
        </Grid>
        {/* <LatestPropertiesCard /> */}
        {/* <BestPropertiesCard /> */}
        {/* Recommended Sellers */}
        <Grid sx={{ marginTop: "10%", marginBottom: "5%" }}>
          <RecommendedSellers />
        </Grid>
      </Container>
    </>
  );
};

export default Home;
