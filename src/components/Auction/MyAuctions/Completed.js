import React, { useEffect } from 'react';
import AuctionList from './AuctionList';
import { AuctionsContext } from 'contexts/AuctionsContext';
import { useGaTracker } from 'hooks';

const Completed = () => {
  useGaTracker();
  const {
    user,
    claimedAuctions,
    loadingClaimedAuctions: loading,
    fetchMyClaimedAuctions,
  } = React.useContext(AuctionsContext);
  const [data, setdata] = React.useState([]);

  useEffect(() => {
    if (!claimedAuctions) return fetchMyClaimedAuctions();

    if (loading || !user) return;

    setdata(
      claimedAuctions.filter((el) => el.winningBig?.user?._id === user?._id)
    );
  }, [claimedAuctions, loading]);

  return <AuctionList auctions={data} loading={loading} />;
};

export default Completed;
