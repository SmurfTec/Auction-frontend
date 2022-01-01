import {
  Box,
  Chip,
  Container,
  IconButton,
  Typography,
} from '@material-ui/core';
import Navbar from 'components/common/NavBar';
import React from 'react';
import styles from 'styles/commonStyles';
import { auctions } from 'data';
import Card from 'components/Auction/Card';
import Footer from 'components/common/Footer';
import AuctionStepper from 'components/Auction/AuctionStepper';
import { makeStyles } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
  auctDetailCont: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',

    '& .MuiCard-root': {
      marginBottom: 0,
    },

    [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
    },

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  container: {
    // maxWidth: 1000,
    '& .MuiChip-root': {
      marginRight: '1rem',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    '& .MuiCardContent-root': {
      [theme.breakpoints.up('md')]: {
        minWidth: 525,
      },
    },
  },
}));

const LeaderBoard = () => {
  const classes = styles();
  const classe_s = useStyles();

  const handleShare = (e) => {
    const { item } = e.currentTarget.dataset;
    // console.log(`item`, item);
  };

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
          <div className={`${classes.gridAlign} ${classe_s.container}`}>
            {auctions &&
              auctions.map((auc, index) => (
                <>
                  <div className={classes.cardContainer}>
                    <div className={classe_s.auctDetailCont}>
                      <Chip
                        label={index + 1}
                        color='primary'
                        disabled={false}
                      />
                      <AuctionStepper auction={auc} />

                      <div className={classes.content}>
                        <Card {...auc} />
                      </div>
                    </div>
                    <Box>
                      <IconButton
                        aria-label='Share'
                        aria-haspopup='true'
                        data-item={auc.id}
                        onClick={handleShare}
                        style={{
                          marginLeft: 'auto',
                          color: '#000',
                        }}
                      >
                        <ShareIcon />
                      </IconButton>
                    </Box>
                  </div>
                </>
              ))}
          </div>
        </section>
      </Container>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default LeaderBoard;
