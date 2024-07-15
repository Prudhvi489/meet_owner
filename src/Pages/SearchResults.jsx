import { Button, Card, CardContent, CardMedia, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import SearchCard from '../Components/SearchCard'
import SearchCarouselCard from '../Components/SearchCarouselCard'
import { useNavigate } from 'react-router-dom'

const SearchResults = () => {
    const navigate = useNavigate(); 
    return (
        <Grid component={"section"} sx={{ backgroundColor: "#F5F5F5" }}>
            <Grid container justifyContent={"space-between"} item p={3} md={9} alignItems={"center"}>
                <Grid item sx={{ color: "#1D3A76", fontWeight: 600, fontSize: "28px" }}>Flats For Sale In Kondapur, Hyderabad</Grid>
                <Grid pr={6} container width={"fit-content"} minWidth={"250px"} alignItems={"center"} gap={1}>
                    <Grid item xs="auto" sx={{ color: "#000000", fontWeight: 600 }}>
                        Sort by
                    </Grid>
                    <Grid item xs>
                        <FormControl fullWidth sx={{ borderRadius: "0.5rem", border: "1.8px solid #2C4D60" }}>
                            <InputLabel id="sort-search">Age</InputLabel>
                            <Select
                                labelId="sort-search"
                                id="sort-search-select"
                                value={""}
                                label="Age"
                            // onChange={}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container p={"1rem"} pt={0}>
                <Grid container item md={9} pr={6}>
                    <Grid item py={"1rem"} container direction={"column"} gap={4}>
                        {
                            [1, 2, 3, 4, 5, 6, 7].map(() => {
                                return (
                                    <Grid item width={"100%"}>
                                        <SearchCard />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    <SearchCarouselCard />
                </Grid>
                <Grid item md={3} pt={"1rem"} container direction={"column"} gap={3}>
                    <Grid container direction={"column"} gap={2} p={"1rem"} sx={{ backgroundColor: "#fff", borderRadius: "1rem", boxShadow: "0px 0px 22px 0px #D2D2D2" }}>
                        <Grid width={"100%"} position={"relative"}>
                            <img style={{ width: "100%", objectFit: "cover", aspectRatio: 16 / 12, borderRadius: "1rem" }} src="https://img.freepik.com/free-photo/vertical-low-angle-shot-buildings-new-york_181624-38456.jpg" alt="image" />
                            <Grid sx={{ padding: "1rem", position: "absolute", top: 0, right: 0 }} justifyContent={"flex-end"} container gap={1}>
                                <Button sx={{ color: "#fff", padding: "0.3rem 0.7rem", borderRadius: "0.5rem", border: "1px solid #fff", textTransform: "none" }} onClick={()=>navigate("/home/propertydetails")}>View Details</Button>
                                <Button sx={{ color: "#fff", padding: "0.3rem 0.7rem", borderRadius: "0.5rem", border: "1px solid #fff", textTransform: "none" }}>Contact</Button>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            {
                                [1, 2].map((data) => {
                                    return (
                                        <Grid item md={6}>
                                            <Card sx={{ overflow: "hidden", borderRadius: "1rem", }}>
                                                <Typography sx={{ backgroundColor: "#1D3A76", color: "#ffffff", textAlign: "center", padding: "0.5rem 0rem" }}>Latest Property</Typography>
                                                <CardMedia
                                                    component="img"
                                                    sx={{ aspectRatio: 16 / 15 }}
                                                    image="https://img.freepik.com/free-photo/vertical-low-angle-shot-buildings-new-york_181624-38456.jpg"
                                                    alt="Paella dish"
                                                />
                                                <CardContent sx={{ border: "1px solid black", borderRadius: "0rem 0rem 1rem 1rem", padding: "0.5rem", paddingBottom: "0.5rem !important" }}>
                                                    <Typography sx={{ color: "#492828", fontSize: "28px", fontWeight: 700 }}>₹ 2 Cr</Typography>
                                                    <Typography sx={{ color: "#492828", fontSize: "20px", fontWeight: 700 }}>Lakescape</Typography>
                                                    <Typography sx={{ color: "#A4A4A4", fontSize: "14px", fontWeight: 600 }}>Sell Kondapur. Telengana, India....</Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                    <Grid sx={{ backgroundColor: "#F0F0F0", padding: "1rem", borderRadius: "1rem", boxShadow: "0px 0px 22px 0px #D2D2D2" }} container gap={1} direction={"column"}>
                        <Typography sx={{ color: "#434343", fontWeight: 700, fontSize: "15px", "& span": { color: "#1D3A76" } }}>More Properties By <span>Meet Owner</span></Typography>
                        <Grid container spacing={2}>
                            <Grid item md={4.5}>
                                <Grid container sx={{ borderRadius: "0.5rem", overflow: "hidden", border: "1px solid #2C4D60" }}>
                                    <Grid item md={4} container>
                                        <img style={{ width: "100%", objectFit: "cover", aspectRatio: 16 / 16 }} src="https://img.freepik.com/free-photo/vertical-low-angle-shot-buildings-new-york_181624-38456.jpg" alt="image" />
                                    </Grid>
                                    <Grid item md={8} pl={"0.4rem"}>
                                        <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "#492828" }}>₹ 1.9 Cr</Typography>
                                        <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "#A4A4A4" }}>3 BHK</Typography>
                                        <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "#A4A4A4" }}>1915 sq.ft</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={4.5}>
                                <Grid container sx={{ borderRadius: "0.5rem", overflow: "hidden", border: "1px solid #2C4D60" }}>
                                    <Grid item md={4} container>
                                        <img style={{ width: "100%", objectFit: "cover", aspectRatio: 16 / 16 }} src="https://img.freepik.com/free-photo/vertical-low-angle-shot-buildings-new-york_181624-38456.jpg" alt="image" />
                                    </Grid>
                                    <Grid item md={8} pl={"0.4rem"}>
                                        <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "#492828" }}>₹ 1.9 Cr</Typography>
                                        <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "#A4A4A4" }}>3 BHK</Typography>
                                        <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "#A4A4A4" }}>1915 sq.ft</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={3} sx={{ color: "#00609E", textAlign: "center" }}>See all Properties</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SearchResults