import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import HeartIcon from './icons/HeartIcon'
import Verifed from './icons/Verifed'

const SearchCard = () => {
    return (
        <Grid container p={"1rem"} sx={{ boxShadow: "0px 0px 22px 0px #D2D2D2", borderRadius: "1rem", backgroundColor: "#fff" }}>
            <Grid item md={3.5} overflow={"hidden"}>
                <img style={{ width: "100%", objectFit: "cover", aspectRatio: 16 / 17, borderRadius: "1rem" }} src="https://img.freepik.com/free-photo/vertical-low-angle-shot-buildings-new-york_181624-38456.jpg" alt="image" />
            </Grid>
            <Grid item md={8.5} pl={"2rem"} alignSelf={"flex-end"}>
                <Grid container justifyContent={"space-between"}>
                    <Grid item sx={{ color: "#1D3A76", fontWeight: 700, fontSize: "20px" }}>Rs 2Cr Emi option available</Grid>
                    <Grid item container gap={"1rem"} width={"fit-content"}>
                        <HeartIcon />
                        <Verifed />
                        <span>Verified</span>
                    </Grid>
                </Grid>
                <Typography sx={{ color: "#434343", fontSize: "30px", fontWeight: 700 }}>Lakescape</Typography>
                <Typography sx={{ color: "#A4A4A4", fontSize: "14px", fontWeight: 600, "& span": { color: "#434343" } }}><span>3 BHK Apartment</span> for sell in Kondapur. Telengana, India</Typography>
                <Grid py={"0.5rem"} container gap={"1rem"}>
                    {
                        [1, 2, 3].map((items) => {
                            return (
                                <Grid sx={{ boxShadow: "0px 0px 6px 0px #00000040", padding: "0.5rem", borderRadius: "0.5rem", width: "fit-content" }} container direction={"column"} gap={1}>
                                    <Typography sx={{ color: "#434343", fontSize: "18px", fontWeight: 700 }}>Approved</Typography>
                                    <Typography sx={{ color: "#1D3A76", fontSize: "18px", fontWeight: 700 }}>Tue Jan 2024</Typography>
                                </Grid>
                            )
                        })
                    }
                </Grid>
                <Typography sx={{ color: "#A4A4A4", fontSize: "13px", fontWeight: 600, "& span": { color: "#6B6B6B" } }}>
                    Lakescape by Candeur offers dream homes with unrivaled lake views in 2BHK to 3.5BHK options. Experience abundant natural light, a spacious clubhouse, and a private outdoor working area. Elevate your lifestyle with this perfect blend of comfort and scenic beauty.   <span>Read More...</span>
                </Typography>
                <Grid container gap={"2rem"} py={"0.6rem"}>
                    <Button sx={{ textTransform: "none", fontSize: "16px", backgroundColor: "#59788E", color: "#fff", padding: "0.5rem 1.6rem", borderRadius: "2rem", ":hover": { backgroundColor: "#59788E" } }}>Schedule Visit</Button>
                    <Button sx={{ textTransform: "none", fontSize: "16px", backgroundColor: "#84A3B7", color: "#fff", padding: "0.5rem 1.6rem", borderRadius: "2rem", ":hover": { backgroundColor: "#84A3B7" } }}>Schedule Visit</Button>
                    <Button sx={{ textTransform: "none", fontSize: "16px", backgroundColor: "#E28B6D", color: "#fff", padding: "0.5rem 1.6rem", borderRadius: "2rem", ":hover": { backgroundColor: "#E28B6D" } }}>Schedule Visit</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SearchCard