import { Box, Container, Typography } from '@material-ui/core';
import Navbar from 'components/common/NavBar';
import React from 'react';
import styles from 'styles/commonStyles';
import { auctions } from 'data';
import Card from 'components/Auction/Card';
import Footer from 'components/common/Footer';

const LeaderBoard = () => {
  const classes = styles();
  return (
    <>
      <Navbar user='user' />
      <Container>
        <section className={classes.containerMargin}>
          <Box my={2}>
            <Typography variant='h5' fullWidth align='center'>
              Leaderboard
            </Typography>
          </Box>
          <Box my={2}>
            {auctions && auctions.map((auc) => <Card {...auc} key={auc.id} />)}
          </Box>
        </section>
      </Container>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default LeaderBoard;
