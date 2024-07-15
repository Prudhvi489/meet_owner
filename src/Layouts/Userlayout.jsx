import { Grid, Stack } from '@mui/material'
import React from 'react'
import Header from './Parts/Header'
import Footer from './Parts/Footer'
import { Outlet } from 'react-router-dom'

const Userlayout = () => {
  return (
    <>
    <Stack direction={"column"} style={{height:'100vh'}}>
      <Grid item style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1001, }}>
        <Header/>
      </Grid>
      <Grid item style={{marginTop:'calc( 0rem + 88px )'}}>
          <Outlet/>
      </Grid>
      <Grid item >
          <Footer/>
      </Grid>
    </Stack>
  </>
  )
}

export default Userlayout