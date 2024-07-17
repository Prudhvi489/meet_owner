import { Box, Button, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, MenuItem, Select, Tab, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import backgroundImage from "../Assets/Homeimages/login_bg.svg"
import heroImage from "../Assets/Homeimages/login_image.svg"
import HandRightArrowIcon from '../Components/icons/HandRightArrowIcon'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { LoginStyles } from '../Assets/styles/HomeStyles'
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
    const [value, setValue] = useState(1);
    const [city, setCity] = useState('');
    const jsxStyles = LoginStyles()
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleCity = (event) => {
        setCity(event.target.value);
    };
    return (
        <Grid container sx={{ minHeight: "calc(100vh - 88px)", backgroundColor: "#0253a1", backgroundImage: `url(${backgroundImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", }}>
            <Grid item md={6} container direction={"column"} justifyContent={"space-between"} p={"3rem"}>
                <Grid item container gap={2} p={"3rem"}>
                    <Typography component={"h1"} sx={{ color: "#FFFFFF", fontSize: "2rem" }}>Lorem Ipsum is simply dummy text</Typography>
                    <Grid container direction={"column"} gap={2}>
                        <Grid container alignItems={"center"} gap={1} sx={{ color: "#FFFFFF", fontSize: "1.5rem" }}><HandRightArrowIcon /><Typography>Lorem Ipsum1</Typography></Grid>
                        <Grid container alignItems={"center"} gap={1} sx={{ color: "#FFFFFF", fontSize: "1.5rem" }}><HandRightArrowIcon /><Typography>Lorem Ipsum1</Typography></Grid>
                        <Grid container alignItems={"center"} gap={1} sx={{ color: "#FFFFFF", fontSize: "1.5rem" }}><HandRightArrowIcon /><Typography>Lorem Ipsum1</Typography></Grid>
                    </Grid>
                </Grid>
                <Grid item container>
                    <img style={{ width: "100%", height: "100%", objectFit: "contain" }} src={heroImage} alt="image" />
                </Grid>
            </Grid>
            <Grid item md={6} container alignItems={"center"} justifyContent={"center"}>
                <Grid>
                    <TabContext value={value} sx>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example" className={jsxStyles.tabStyles}>
                                <Tab label="Builder" value={1} />
                                <Tab label="Agent" value={2} />
                                <Tab label="Owner" value={3} />
                                <Tab label="Channel Partner" value={4} />
                            </TabList>
                        </Box>
                        <TabPanel className={jsxStyles.tabPanelStyles} value={1}>
                            <Grid component={"form"} container direction={"column"} gap={6} py={2}>
                                <Grid container alignItems={"flex-end"} gap={1}>
                                    <Grid item xs={"auto"}>
                                        <Select
                                            variant="standard"
                                            value={10}
                                            // onChange={}
                                            label="Select City"
                                        >
                                            <MenuItem value={10}>+91</MenuItem>
                                            <MenuItem value={20}>+92</MenuItem>
                                            <MenuItem value={30}>+93</MenuItem>
                                        </Select>
                                    </Grid>
                                    <Grid item xs>
                                        <FormControl fullWidth variant="standard">
                                            <InputLabel>Enter your Mobile Number</InputLabel>
                                            <Input
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <Button sx={{ textTransform: "none", fontSize: "12px", backgroundColor: "#B6B6B6", color: "#fff", borderRadius: "0.8rem", padding: "0.49rem", fontWeight: 600, marginBottom: "0.5rem", "&:hover": { backgroundColor: "#B6B6B6"}}}>Get OTP</Button>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <TextField label="Name" variant="standard" />
                                <FormControl variant="standard">
                                    <InputLabel>City</InputLabel>
                                    <Select
                                        value={city}
                                        onChange={handleCity}
                                        label="Select City"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>kakinada</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <Grid container justifyContent={"flex-end"}>
                                    <Button sx={{ backgroundColor: "#1D3A76", color: "#fff", boxShadow: "0px 4px 4px 0px #00000040", textTransform: "none", fontSize: "1.1rem", padding: "0.7rem 1.9rem", borderRadius: "2rem", "&:hover": { backgroundColor: "#1D3A76", } }}>Submit</Button>
                                </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel className={jsxStyles.tabPanelStyles} value={2}>Item Two</TabPanel>
                        <TabPanel className={jsxStyles.tabPanelStyles} value={3}>Item Three</TabPanel>
                        <TabPanel className={jsxStyles.tabPanelStyles} value={4}>Item Four</TabPanel>
                    </TabContext>
                    <Grid my={2} py={2} textAlign={"center"} sx={{ color: "#fff", borderRadius: "1rem", backgroundColor: "#0000004D", "& span": { color: "#FBAF01", textDecoration: "underline" } }}>Existing User ? <span>Login</span></Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Login