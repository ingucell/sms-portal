import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import PeopleIcon from '@material-ui/icons/People';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import HomeIcon from '@material-ui/icons/Home';
import { width } from '@mui/system';
import Header from '../../components/Header';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '',
    color: 'white',
    borderRadius: '1rem',
    padding: '2rem',
    gap: '2rem'
  },
  box: {
    width: '30%',
    height: '30rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding:'2rem',
    color:"black",
    borderRadius: '1rem',
    boxShadow: '0px 10px 60px #d2b7f3'
   
  },
  middleBox: {
    width: '30%',
    height: '30rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding:'2rem',
    color:"black",
    borderRadius: '1rem',
    boxShadow: '0px 10px 60px #d2b7f3'
  },
  icon: {
    marginBottom: theme.spacing(2),
    fontSize: '5rem'
  }
}));

const BoxItem = ({ icon, children }) => {
  const classes = useStyles();

  return (

    
    <Box className={classes.box}>
      <PeopleIcon className={classes.icon}/>
     <Typography
       variant='h2'
       color='#8b3af8'
       fontWeight='bold'
       textAlign='center'
     >
     Free API Integration Support
     </Typography>
<br />
     <Typography
       variant='h5'
       lineHeight='1.6rem'
     >
     If you have an application from which you send or want to send SMS to your contacts or audience, we can help you easily integrate our SMS system in your application. What's more? We will do it for you at no cost. It's FREE!
     </Typography>
    </Box>
  );
};

const MiddleBox = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={`${classes.box} ${classes.middleBox}`}>
      <GroupWorkIcon className={classes.icon} />
      <Typography
       variant='h2'
       color='#8b3af8'
       fontWeight='bold'
       textAlign='center'
     >
     Personalised SMS
     </Typography>
<br />
     <Typography
       variant='h5'
       lineHeight='1.6rem'
     >
     If you have an application from which you send or want to send SMS to your contacts or audience, we can help you easily integrate our SMS system in your application. What's more? We will do it for you at no cost. It's FREE!
     </Typography>
    </Box>
  );
};

const ThreeBox = () => {
  const classes = useStyles();

  return (
    <>
      <Header title={'Services'}>

      </Header>
    <Box className={classes.container}>
      <BoxItem icon={<PeopleIcon />}>Left Box</BoxItem>
      <MiddleBox>Middle Box</MiddleBox>
      <BoxItem icon={<HomeIcon />}>Right Box</BoxItem>
    </Box>
    </>
    
  );
};

export default ThreeBox;
