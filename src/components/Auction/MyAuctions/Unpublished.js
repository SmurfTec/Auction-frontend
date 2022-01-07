import React, { useContext, useEffect, useState, useMemo } from 'react';
import AuctionList from './AuctionList';
import { AuctionsContext } from 'contexts/AuctionsContext';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const Unpulished = ({ status }) => {
  const { myAuctions, loadingMyAuctions } = useContext(AuctionsContext);
  const [data, setdata] = useState([]);

  const location = useLocation();

  useEffect(() => {
    if (loadingMyAuctions || !myAuctions) return;

    setdata(myAuctions.filter((el) => el.status === status));
  }, [myAuctions, loadingMyAuctions, status]);

  // * Filter by search
  const parsedQuery = useMemo(() => {
    return queryString.parse(location.search);
  }, [location.search]);

  useEffect(() => {
    // console.log(`parsedQuery`, parsedQuery);
    if (!parsedQuery.search)
      return setdata(myAuctions.filter((el) => el.status === status) || []);

    setdata(
      myAuctions?.filter(
        (el) =>
          el.status === status &&
          el.title.toLowerCase().includes(parsedQuery.search.toLowerCase())
      )
    );
  }, [parsedQuery, status]);

  return <AuctionList auctions={data} loading={loadingMyAuctions} />;
};

export default Unpulished;
