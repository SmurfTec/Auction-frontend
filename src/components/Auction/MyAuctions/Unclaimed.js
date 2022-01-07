import { AuctionsContext } from 'contexts/AuctionsContext';
import React, { useEffect } from 'react';
import AuctionList from './AuctionList';

const Unclaimed = () => {
  const { unClaimedAuctions, loading, user } =
    React.useContext(AuctionsContext);
  const [data, setdata] = React.useState([]);

  useEffect(() => {
    // console.log(`unClaimedAuctions`, unClaimedAuctions);
    // console.log(`loading`, loading);
    if (loading || !unClaimedAuctions) return;

    setdata(
      unClaimedAuctions.filter(
        (el) =>
          el.status === 'archived' && el.winningBig?.user?._id === user._id
      )
    );

    // console.log(
    //   `new data`,
    //   unClaimedAuctions.filter((el) => el.winningBig?.user?._id === user._id)
    // );
  }, [unClaimedAuctions, loading]);

  return <AuctionList auctions={data} loading={loading} />;
};

export default Unclaimed;
