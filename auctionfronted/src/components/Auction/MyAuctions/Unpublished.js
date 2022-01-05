import React, { useContext, useEffect, useState, useMemo } from 'react';
import AuctionList from './AuctionList';
import { AuctionsContext } from 'contexts/AuctionsContext';
import { AuthContext } from 'contexts/AuthContext';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const Unpulished = () => {
  const { user } = useContext(AuthContext);
  const { myAuctions, loadingMyAuctions } = useContext(AuctionsContext);
  const [data, setdata] = useState([]);

  const location = useLocation();

  useEffect(() => {
    if (loadingMyAuctions || !myAuctions) return;

    setdata(myAuctions.filter((el) => el.user?._id === user._id));
  }, [myAuctions]);

  // * Filter by search
  const parsedQuery = useMemo(() => {
    return queryString.parse(location.search);
  }, [location.search]);

  useEffect(() => {
    console.log(`parsedQuery`, parsedQuery);
    if (!parsedQuery.search)
      return setdata(
        myAuctions.filter((el) => el.user?._id === user._id) || []
      );

    setdata(
      myAuctions?.filter(
        (el) =>
          el.user?._id === user._id &&
          el.title.toLowerCase().includes(parsedQuery.search.toLowerCase())
      )
    );
  }, [parsedQuery]);

  return <AuctionList auctions={data} loading={loadingMyAuctions} />;
};

export default Unpulished;
