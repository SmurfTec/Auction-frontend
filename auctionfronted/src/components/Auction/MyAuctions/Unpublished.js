import React, { useContext, useEffect, useState } from 'react';
import AuctionList from './AuctionList';
import { AuctionsContext } from 'contexts/AuctionsContext';
import { AuthContext } from 'contexts/AuthContext';

const Unpulished = () => {
  const { user } = useContext(AuthContext);
  const { myAuctions, loadingMyAuctions } = useContext(AuctionsContext);
  const [data, setdata] = useState([]);

  useEffect(() => {
    if (loadingMyAuctions || !myAuctions) return;

    setdata(myAuctions.filter((el) => el.user?._id === user._id));
  }, [myAuctions]);

  return <AuctionList auctions={data} loading={loadingMyAuctions} />;
};

export default Unpulished;
