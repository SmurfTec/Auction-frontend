import { Box, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Card from 'components/Auction/Card';
import AuctionStepper from '../AuctionStepperM';
import ShareIcon from '@material-ui/icons/Share';
import styles from 'styles/commonStyles';

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
}));

const AuctionList = ({ data }) => {
  console.log(`data`, data);
  const classes = styles();
  const classes_s = useStyles();

  const handleShare = (e) => {
    const { item } = e.currentTarget.dataset;
    // console.log(`item`, item);
  };

  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        sx={{ rowGap: 10, flexWrap: 'nowrap' }}
      >
        {data ? (
          data.map((auc) => (
            <div className={classes.cardContainer} key={auc.id}>
              <div className={classes_s.auctDetailCont}>
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
          ))
        ) : (
          <Box mt={4}>
            <Typography variant='subtitle1'>No Record found</Typography>
          </Box>
        )}
      </Box>
    </>
  );
};

export default AuctionList;
