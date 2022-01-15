import React, { useContext } from 'react';

import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { useTextInput } from 'hooks';
import { AuthContext } from 'contexts/AuthContext';

const CreateBidForm = ({
  createBid,
  isMakingBid,
  auctionId,
  startingPrice,
  customClasses,
  globalClasses,
}) => {
  const { isLoggedIn } = useContext(AuthContext);
  const [biddingAmount, handleAmountChange, resetAmount] = useTextInput(0);

  const handleAddBid = (e) => {
    e.preventDefault();
    createBid(biddingAmount, auctionId, resetAmount);
  };
  if (!isLoggedIn) return <Box sx={{ flexBasis: '40%' }}></Box>;

  return (
    <Box sx={{ flexBasis: '40%' }} className={`${customClasses.contentCont}`}>
      <Typography variant='h5'>Bid Now</Typography>

      <Box mt={2}>
        <Typography variant='subtitle2'>
          Bid Amount : Minimum Bid {startingPrice}
        </Typography>
      </Box>
      <form onSubmit={handleAddBid}>
        <Box
          mt={2}
          className={`${globalClasses.flexAlignDisp}`}
          justifyContent='space-between'
          sx={{ columnGap: 15 }}
        >
          <TextField
            name='biddingPrice'
            placeholder='Amount'
            color='primary'
            type='number'
            required
            value={biddingAmount}
            onChange={handleAmountChange}
            inputProps={{
              min: startingPrice || 0,
            }}
            // size='small'
          />
          <Button
            disabled={isMakingBid}
            variant='contained'
            color='primary'
            type='submit'
          >
            Place BID
            {isMakingBid && <CircularProgress size={25} />}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreateBidForm;
