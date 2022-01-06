import React from 'react';
import AuctionList from './AuctionList';

const Unclaimed = () => {
  return <AuctionList auctions={[]} loading={false} />;
};

export default Unclaimed;
