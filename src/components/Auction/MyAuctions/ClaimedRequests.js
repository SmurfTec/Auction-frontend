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
    updateClaimRequestSentById,
  } = useContext(AuctionsContext);

  const { user } = useContext(AuthContext);
  const [data, setdata] = useState([]);

  const [filter, setFilter] = useState('sent');

  useEffect(() => {
    if (loadingClaimRequests || !user) return;

    // console.log('filter', filter);
    // console.log('claimRequestReceived', claimRequestReceived);
    if (filter === 'received') {
      setdata(claimRequestReceived);
    } else {
      console.log('hahah');
      setdata(claimRequestSent);
    }
  }, [
    loadingClaimRequests,
    claimRequestSent,
    claimRequestReceived,
    filter,
    user,
  ]);

  const handleSent = () => {
    setFilter('sent');
  };
  const handleRecieved = () => {
    setFilter('received');
  };
  return (
    <>
      <Box display='flex' justifyContent='left' alignItems='center' mb={1}>
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
        updateClaimRequestSentById={updateClaimRequestSentById}
      />
    </>
  );
};

export default ClaimRequests;
