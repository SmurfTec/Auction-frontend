import React, { useContext, useEffect, useMemo, useState } from 'react';
import AuctionList from './AuctionList';
import { AuctionsContext } from 'contexts/AuctionsContext';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useGaTracker } from 'hooks';

const WatchList = () => {
  useGaTracker();
  // * I gave my custom name "loading" here,
  const {
    watchlist,
    loadingWatchlist: loading,
    fetchWatchlist,
  } = useContext(AuctionsContext);

  const [auctions, setAuctions] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (!watchlist) return fetchWatchlist();

    if (loading || !watchlist) return;

    setAuctions(watchlist.map((el) => el.auction));
  }, [watchlist, loading]);

  // * Filter by search
  const parsedQuery = useMemo(() => {
    return queryString.parse(location.search);
  }, [location.search]);

  useEffect(() => {
    console.log(`parsedQuery`, parsedQuery);
    if (!watchlist) return;

    if (!parsedQuery.search)
      return setAuctions(watchlist.map((el) => el.auction) || []);

    setAuctions(
      auctions?.filter((el) =>
        el.title.toLowerCase().includes(parsedQuery.search.toLowerCase())
      )
    );
  }, [parsedQuery]);

  return <AuctionList auctions={auctions} loading={loading} />;
};

export default WatchList;
