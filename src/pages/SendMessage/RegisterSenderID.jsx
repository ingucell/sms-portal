import { Box, Container } from '@mui/material'
import {Typography} from '@mui/material'
import React from 'react'
import Inputs from '../../components/Inputs'
import PageHeadings from '../../components/pageHeadings'
import {Button} from '@material-ui/core'

function RegisterSenderID() {
  return (
    <Box>
        <Box m="25px">
               <PageHeadings title='Register Sender ID' subtitle='Register Sender ID here!'/>


        <Container maxWidth="sm" style={{ boxShadow: '0px 0px 7px #a7eacf', padding: '2em', marginTop: '4rem' }}>
            <Inputs label="Sender ID"/>
            <Inputs label="Purpose of Sender ID"/>

            <Typography
             marginTop='2rem'
            >
            Be <strong>SPECIFIC</strong> with the purpose of the sender ID. <strong>eg. For Sending SMS News Letters.</strong> Avoid descriptions like "For Messages", "For Business", "For Communication", "Personal", "For Work".
            </Typography>

            <Button variant="contained" style={{backgroundColor: '#7cdfb6', marginTop:"25px"}}>
          REGISTER SENDER ID
            </Button>
            </Container>
        </Box>
    </Box>
  )
}

export default RegisterSenderID