import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import info2 from './info2.jpg'
import { Typography } from '@mui/material';


const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    gap: '10rem',
    display: 'flex',
    justifyContent: 'space-between',
    width: '75%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '2rem'
  },

  heading:{
     fontWeight: 'bolder'
  }
}));

const Image = () => (
  <img src={info2} alt="Placeholder image" width='40%' height='40%'/>
);


const Grid2 = () => {
  const classes = useStyles();

  const Description = () => (
    <div>
      <h1 className={classes.heading}>10+ Years Of Experiences</h1>
      <Typography
        variant='h4'
        width='120%'
      >Scripted Solution provides indispensable BulkSMS services at the most affordable prices in Ghana. Our SMS gateway is the fastest and most reliable gateway ever discovered in Ghana. Excellence is our hallmark and we pride ourselves of quality services to our clients.
<br /> <br />
Our Web to SMS platform offers a diverse way for you to manage your SMS communications:

</Typography>
    </div>
  );

  return (
    <Box className={classes.container}>
      <Image />

      <Description />
    </Box>
  );
};

export default Grid2;
