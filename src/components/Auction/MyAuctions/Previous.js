import React from 'react';
import watchImg from 'assets/watchImg.png';
import AuctionList from './AuctionList';
import { auctions } from 'data';

const Previous = () => {
  // const {myAuctions} = React.useContext(AuctionsContext)
  //   const [data, setdata] = React.useState([]);

  // useEffect(() => {
  // }, [myAuctions])

  return <AuctionList data={auctions} />;
};

export default Previous;
