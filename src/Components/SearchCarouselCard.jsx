import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import HeartIcon from './icons/HeartIcon'
import CarouselShareIcon from './icons/CarouselShareIcon'
import logo from "../Assets/Homeimages/Meet Owner Logo 1.svg"
import PhoneIcon from './icons/PhoneIcon'

const SearchCarouselCard = () => {
    return (
        <Grid container direction={"column"} sx={{ backgroundColor: '#e5e5e5c2', borderRadius: "1rem", boxShadow: "0px 0px 22px 0px #D2D2D2" }}>
            <Grid item sx={{ padding: "1.5rem 1rem", color: "#1D3A76", fontSize: "28px", fontWeight: 700 }}>Featured Project Based on your search</Grid>
            <Grid item sx={{ backgroundColor: "#F3F3F3", padding: "1rem 2rem" }} width={"100%"}>
                <Grid container alignItems={"center"} position={"relative"}>
                    <Grid item md={3.5} width={"100%"} container>
                        <img style={{ width: "100%", objectFit: "cover", aspectRatio: 16 / 18, borderRadius: "1rem" }} src="https://img.freepik.com/free-photo/vertical-low-angle-shot-buildings-new-york_181624-38456.jpg" alt="image" />
                    </Grid>
                    <Grid item md={8.5} pl={"2rem"}>
                        <Typography sx={{ color: "#492828", fontSize: "25px", fontWeight: 700 }}>₹ 2 Cr - ₹ 4 Cr</Typography>
                        <Typography sx={{ color: "#492828", fontSize: "30px", fontWeight: 700 }}>Swan</Typography>
                        <Typography sx={{ color: "#A4A4A4", fontSize: "14px", fontWeight: 600, "& span": { color: "#434343" } }}><span>3 BHK Apartment</span> for sell in Kondapur. Telengana, India</Typography>
                        <Grid py={"0.5rem"} container gap={"1rem"}>
                            {
                                [1, 2].map((items) => {
                                    return (
                                        <Grid sx={{ boxShadow: "0px 0px 6px 0px #00000040", padding: "0.5rem", borderRadius: "0.5rem", width: "fit-content" }} container direction={"column"} gap={1}>
                                            <Typography sx={{ color: "#434343", fontSize: "18px", fontWeight: 700 }}>Possession Date</Typography>
                                            <Typography sx={{ color: "#1D3A76", fontSize: "18px", fontWeight: 700 }}>Jan, 2025</Typography>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                    <Grid container width={"fit-content"} gap={2} sx={{ position: "absolute", top: 0, right: 0 }}>
                        <HeartIcon />
                        <CarouselShareIcon />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justifyContent={"space-between"} item sx={{ padding: "0.5rem 2rem" }}>
                <Grid item container alignItems={"center"} width={"fit-content"} direction={"column"}>
                    <img src={logo} alt="logo" />
                    <Typography sx={{ color: '#888888', fontSize: "14px", fontWeight: 600 }}>Developer</Typography>
                </Grid>
                <Grid item container gap={2} alignItems={"center"} width={"fit-content"}>
                    <Button sx={{ textTransform: "none", fontSize: "16px", backgroundColor: "#E28B6D", color: "#fff", padding: "0.8rem 1.8rem", borderRadius: "0.5rem", boxShadow: "0px 0px 2px 2px #00000040", ":hover": { backgroundColor: "#E28B6D" } }} startIcon={<PhoneIcon />}>Contact Developer</Button>
                    <Button sx={{ textTransform: "none", fontSize: "16px", backgroundColor: "#E28B6D", color: "#fff", padding: "0.8rem 1.8rem", borderRadius: "0.5rem", boxShadow: "0px 0px 2px 2px #00000040", ":hover": { backgroundColor: "#E28B6D" } }}>View More</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SearchCarouselCard