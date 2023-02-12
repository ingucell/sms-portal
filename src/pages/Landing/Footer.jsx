import React from 'react';
import { Box, Link, Typography, Grid } from '@material-ui/core';

const Footer = () => {
  return (
    <Box p={2} bgcolor="#F5F5F5" display="flex" flexDirection="column">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h6">Contact Me</Typography>
          <form>
            {/* form inputs here */}
          </form>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">Links</Typography>
          <nav>
            <Link href="#">About Us</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">Terms of Use</Link>
            <Link href="#">Privacy Policy</Link>
          </nav>
        </Grid>
      </Grid>
      <Typography variant="body2" align="center">
        Copyright © {new Date().getFullYear()} My Company
      </Typography>
    </Box>
  );
};

export default Footer;
