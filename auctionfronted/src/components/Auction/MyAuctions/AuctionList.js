import { Box, Typography } from '@material-ui/core';
import React from 'react';
import Card from 'components/Auction/Card';

const AuctionList = ({ data }) => {
  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        sx={{ rowGap: 10, flexWrap: 'nowrap' }}
      >
        {data ? (
          data.map((auc) => <Card {...auc} key={auc.id} />)
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
