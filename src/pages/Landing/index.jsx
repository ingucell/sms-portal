import React, {useState} from 'react'
import { Box, useTheme, IconButton, Typography } from "@mui/material";
import Header from '../../components/Header';
import { ColorModeContext, tokens } from "../../theme";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Button1 from '../../components/Button';
import banner from './banner1.png'
import main from './main.gif'
import Grid from '../../components/Grid';
import Grid2 from '../../components/Grid2';
import ThreeBox from './ThreeBox';
import Footer from './Footer';
var GifPlayer = require('react-gif-player');



const Landing = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    
     return (

        
        <>
         <img src={banner} height='100%' width='100%' style={{position: "static", zIndex: "1", top:"-5rem"}}/>
        <Box
        display='flex'
        flexWrap='wrap'
        marginTop='30rem'
        >
       
       
        <Box
         position='relative'
         zIndex='1'
         top='-70rem'
         left='45px'
         width='max-content'
         
         >
         <Header title="The SMS Campaigne Manager" subtitle="Mathias SMS offers an SMS Campaign Manager to simplify SMS marketing. The tool features bulk messaging, audience segmentation, personalization, tracking, analysis, scheduling, automation, and integration for improved customer engagement and sales." />

       

    <Button1 value={'Get Started!'}/>
        </Box>

          <Box
             position='relative'
             top='-96rem'
             left='50rem'
             zIndex='-1'
>
          
           <GifPlayer gif={main} still={main} />
          </Box>
        </Box>

       {/* Row 2 */}


      <Box
         position='relative'
         top='-80rem'
      >
           <Grid />
      </Box>

    
      {/* Row 3 */}
      <Box
      position='relative'
      top='-70rem'
      >
           <ThreeBox />
      </Box>


      {/* Row 4 */}


      <Box
         position='relative'
         top='-50rem'
      >
           <Grid2 />
      </Box>

      {/* <Footer /> */}
    
     
        </>
     )
}

export default Landing