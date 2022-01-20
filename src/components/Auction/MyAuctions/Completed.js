import React, { useEffect } from 'react';
import AuctionList from './AuctionList';
import { AuctionsContext } from 'contexts/AuctionsContext';
import { useGaTracker } from 'hooks';
const Completed = () => {
  useGaTracker();
  const { topAuctions, loading, user } =
    React.useContext(AuctionsContext);
  const [data, setdata] = React.useState([]);

  useEffect(() => {
    if (loading || !topAuctions) return;

    setdata(
      topAuctions.filter(
        (el) => el.winningBig?.user?._id === user._id
      )
    );
  }, [topAuctions, loading]);

  return <AuctionList auctions={data} loading={loading} />;
};

export default Completed;
