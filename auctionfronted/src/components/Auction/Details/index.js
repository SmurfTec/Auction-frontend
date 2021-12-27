import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import Navbar from 'components/common/NavBar';
import React, { useEffect, useState } from 'react';
import styles from 'styles/commonStyles';
import AuctionStepper from '../AuctionStepperM';
import Card from './DetailCard';
import { auctions } from 'data';
import Footer from 'components/common/Footer';
import { useParams } from 'react-router';
import ScrollToTop from 'utils/ScrollToTop';

const useStyles = makeStyles((theme) => ({
  auctDetailCont: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',

    '& .MuiCard-root': {
      marginBottom: 0,
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
}));
const AuctionDetails = () => {
  const classes = styles();
  const classes_s = useStyles();
  const { id } = useParams();
  const [auction, setAuction] = useState(null);

  useEffect(() => {
    const a = auctions.filter((e) => e.id === id * 1);

    // ^ Validate if a is empty or not ,, currently not sure..
    if (a) setAuction(...a);
  }, [id]);

  const handleSubmit = () => {};

  return (
    <>
      <Navbar user='user' />

      <ScrollToTop></ScrollToTop>
      <Container>
        <section className={classes.containerMargin}>
          <Typography variant='h4' align='center' fullWidth>
            Auction Details
          </Typography>
        </section>
        {auction ? (
          <section className={classes.containerMargin}>
            <div className={classes_s.auctDetailCont}>
              <AuctionStepper auction={auction} />
              <div className={classes.content}>
                <Card {...auction} />
              </div>
            </div>

            <Box
              display='flex'
              mt={3}
              sx={{
                columnGap: '2em',
                alignItems: 'center',
                justifyContent: 'end',
              }}
            >
              <Typography variant='subtitle1'>
                Interested ? Place a bid
              </Typography>
              <TextField
                name='biddingAmount'
                placeholder='Amount'
                color='primary'
                type='number'
                size='small'
              />
            </Box>
            <Box mt={3} mb={7} sx={{ textAlign: 'right' }}>
              <Button
                variant='contained'
                color='primary'
                onClick={handleSubmit}
              >
                BID
              </Button>
            </Box>
          </section>
        ) : (
          <Typography variant='subtitle1'>Auction Not Found</Typography>
        )}
      </Container>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default AuctionDetails;
