import React from 'react';
import { auctions } from 'data';
import Card from './Card';

const Auctions = () => {
  return auctions && auctions.map((auc) => <Card {...auc} key={auc.id} />);
};

export default Auctions;
