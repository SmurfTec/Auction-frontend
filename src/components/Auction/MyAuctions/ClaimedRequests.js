import { AuctionsContext } from 'contexts/AuctionsContext';
import React, { useContext, useEffect, useState } from 'react';
import { useGaTracker } from 'hooks';
import ClaimRequestsList from './ClaimRequestsList';
import { AuthContext } from 'contexts/AuthContext';
import { Box, Button } from '@material-ui/core';
const ClaimRequests = () => {
  useGaTracker();

  const {
    claimRequestSent,
    claimRequestReceived,
    loadingClaimRequests,
  } = useContext(AuctionsContext);

  console.log('SENT', claimRequestSent);
  console.log('RECIEVED', claimRequestReceived);
  console.log('CLAIM', loadingClaimRequests);

  const { user } = useContext(AuthContext);
  const [data, setdata] = useState([]);

  const [filter, setFilter] = useState('sent');

  useEffect(() => {
    if (loadingClaimRequests || !user) return;

    // console.log('filter', filter);
    // console.log('claimRequestReceived', claimRequestReceived);
    setdata(
      filter === 'recieved' ? claimRequestReceived : claimRequestSent
    );
  }, [
    loadingClaimRequests,
    claimRequestSent,
    claimRequestReceived,
    filter,
    user,
  ]);
  const handleSent = () => {
    setdata(claimRequestSent);
  };
  const handleRecieved = () => {
    setdata(claimRequestReceived);
  };
  return (
    <>
      <Box
        display='flex'
        justifyContent='left'
        alignItems='center'
        mb={1}
      >
        <Button
          variant='contained'
          color='primary'
          size='small'
          onClick={handleSent}
        >
          sent
        </Button>
        <Button
          variant='contained'
          color='success'
          size='small'
          onClick={handleRecieved}
        >
          recieved
        </Button>
      </Box>

      <ClaimRequestsList
        requests={data}
        loading={loadingClaimRequests}
        setFilter={setFilter}
        filter={filter}
      />
    </>
  );
};

export default ClaimRequests;
