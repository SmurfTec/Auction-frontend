import React, { useContext, useEffect, useState } from 'react';
import AuctionList from './AuctionList';
import { AuctionsContext } from 'contexts/AuctionsContext';

const WatchList = () => {
  // * I gave my custom name "loading" here,
  const { watchlist, loadingWatchlist: loading } = useContext(AuctionsContext);

  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    if (loading || !watchlist) return;

    setAuctions(watchlist.map((el) => el.auction));
  }, [watchlist]);

  return <AuctionList auctions={auctions} loading={loading} />;
};

export default WatchList;
