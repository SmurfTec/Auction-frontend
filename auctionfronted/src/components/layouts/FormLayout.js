import React from 'react';
import { Typography, Grid, Box, Card } from '@material-ui/core';
import { useStyles } from 'styles/FormLayoutStyles';
import Logo from 'components/common/Logo';
import { Outlet } from 'react-router-dom';
import Navbar from 'components/common/NavBar';
import Footer from 'components/common/Footer';

const FormLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      {/* <section className={classes.mainContainer}> */}
      <Navbar />
      {/* <section className={classes.backImgContainer}>
          <Box className={classes.backImg}>
            <img
              src='http://brandio.io/envato/iofrm/html/images/graphic3.svg'
              alt='background'
            />
          </Box>
        </section> */}

      {/* <div> */}
      {/* <Grid container>
            <Grid item sx={{ mb: 5 }} colspacing={5} xs={12}>
              <Logo w={35} h={35} />
            </Grid>
          </Grid> */}
      {/* <div className={classes.root}> */}
      <Outlet />
      {/* </div> */}

      <Footer />
      {/* </div> */}
      {/* </section> */}
    </>
  );
};

export default FormLayout;
