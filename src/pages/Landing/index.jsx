import React, {useState} from 'react'
import { Box, useTheme, IconButton, Typography } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import banner from './banner1.png'
import main from './main.gif'
var GifPlayer = require('react-gif-player');


const Landing = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    
     return (
        <>
        <Box>
       
        <img src={banner} height='100%' width='80%' style={{position: "relative", zIndex: "1"}}/>
        <Box>
        <Typography
                  width='max-content'
                  marginLeft='35px'
                  variant="h1"
                  position='relative'
                  zIndex='1'
                  top='-40rem'
                  color={colors.black[900]}
                  fontWeight="bolder"
                >
                 The SMS Project
                </Typography>
        </Box>
          <Box
             alignContent="right" 
             margin= "-50rem 55rem"
        >
          
           <GifPlayer gif={main} />
          </Box>
        </Box>
          
        </>
     )
}

export default Landing