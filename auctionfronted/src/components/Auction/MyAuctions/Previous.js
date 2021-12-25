import React from 'react';
import watchImg from 'assets/watchImg.png';
import AuctionList from './AuctionList';

const dummyData = [
  {
    id: 122,
    title: 'Siko',
    img: watchImg,
    description:
      'Sea-Dweller reference 126603, a stainless steel and gold wristwatch, Circa 2019',
    price: '$440',
    location: 'Fine Art Gallery, Islamabad',
    startedby: 'Ali Hamza',
    timeLeft: '12/2/2022',
  },
];

const Previous = () => {
  // const {myAuctions} = React.useContext(AuctionsContext)
  //   const [data, setdata] = React.useState([]);

  // useEffect(() => {
  // }, [myAuctions])

  return <AuctionList data={dummyData} />;
};

export default Previous;
