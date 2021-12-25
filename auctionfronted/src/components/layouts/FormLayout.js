import React from 'react';
import { Typography, Grid, Box, Card } from '@material-ui/core';
import { useStyles } from 'styles/FormLayoutStyles';
import Logo from 'components/common/Logo';
import { Outlet } from 'react-router-dom';

const FormLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <section className={classes.mainContainer}>
      <section className={classes.backImgContainer}>
        <Box className={classes.backImg}>
          <img
            src='http://brandio.io/envato/iofrm/html/images/graphic3.svg'
            alt='background'
          />
        </Box>
      </section>

      <Card className={classes.formContent}>
        <Grid container>
          <Grid item sx={{ mb: 5 }} colspacing={5} xs={12}>
            <Logo variant='h3' color='textPrimary' />
          </Grid>
        </Grid>
        <Outlet />
      </Card>
    </section>
  );
};

export default FormLayout;
