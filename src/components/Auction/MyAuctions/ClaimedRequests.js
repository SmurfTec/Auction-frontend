import { AuctionsContext } from 'contexts/AuctionsContext';
import React, { useContext, useEffect, useState } from 'react';
import { useGaTracker } from 'hooks';
import ClaimRequestsList from './ClaimRequestsList';
import { AuthContext } from 'contexts/AuthContext';

const ClaimRequests = () => {
  useGaTracker();
  const { claimRequestSent, claimRequestReceived, loadingClaimRequests } =
    useContext(AuctionsContext);
  const { user } = useContext(AuthContext);
  const [data, setdata] = useState([]);

  const [filter, setFilter] = useState('received');

  useEffect(() => {
    if (loadingClaimRequests || !user) return;

    console.log('filter', filter);
    console.log('claimRequestReceived', claimRequestReceived);
    setdata(filter === 'sent' ? claimRequestSent : claimRequestReceived);
  }, [loadingClaimRequests, claimRequestSent, claimRequestReceived, filter]);

  return (
    <ClaimRequestsList
      requests={data}
      loading={loadingClaimRequests}
      setFilter={setFilter}
      filter={filter}
    />
  );
};

export default ClaimRequests;
