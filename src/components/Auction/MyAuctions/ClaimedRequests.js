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
    updateClaimRequestReceivedById,
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
      <Box display='flex' justifyContent='left' alignItems='center' mb={2}>
        <Button
          variant='contained'
          color={filter === 'sent' ? 'primary' : 'default'}
          size='small'
          onClick={handleSent}
          style={{
            transition: '0.5s',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }}
        >
          sent
        </Button>
        <Button
          style={{
            transition: '0.5s',
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
          variant='contained'
          color='success'
          size='small'
          color={filter !== 'sent' ? 'primary' : 'default'}
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
        updateClaimRequestReceivedById={updateClaimRequestReceivedById}
      />
    </>
  );
};

export default ClaimRequests;
