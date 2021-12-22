import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import Navbar from 'components/common/NavBar';
import styles from 'styles/commonStyles';
import HeroCarousel from 'components/common/HeroCarousel';
import Auctions from 'components/Auction';
import Footer from 'components/common/Footer';
const useStyles = makeStyles((theme) => ({
  filter: {
    display: 'flex',
    // alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'column',
      flexWrap: 'nowrap',
      // '&:first-child': {
      //   rowGap: theme.spacing(2),
      // },
      rowGap: theme.spacing(2),
    },
  },
}));

const HomePage = () => {
  const classes = styles();
  const classes_s = useStyles();
  return (
    <>
      <Navbar user='user' />
      <section>
        <HeroCarousel />
      </section>
      <section className={classes.topSection} />
      <Container>
        <section className={`${classes.containerMargin} ${classes.topSection}`}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <div className={classes_s.filter}>
                <Typography variant='h5'>Filter By</Typography>
                <Typography variant='subtitle2'>Price (low-high)</Typography>
                <Typography variant='subtitle2'>Price (high-low)</Typography>
                {/* <Typography variant='subtitle2' fullWidth>
                  Location
                </Typography> */}
                <Typography variant='subtitle2'>Mostly Viewed</Typography>
                <Typography variant='subtitle2'>Categories</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Typography variant='h5'>
                <Box mb={3}>Featured Auctions</Box>
              </Typography>
              <Auctions />
            </Grid>
          </Grid>
        </section>
      </Container>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default HomePage;
