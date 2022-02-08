import React from 'react';
import { Link } from 'react-router-dom';
import circle from 'assets/LotPot_circle.png';

function Logo({ w, h, comp }) {
  return (
    <div id='logo'>
      <Link component={Link} to='/'>
        {/* {comp === 'nav' ? (
          <img src={circle} width={w} height={h} alt='LotPot Auction' />
        ) : ( */}
        <img src={circle} width={w} height={h} alt='LotPot Auction' />
        {/* )} */}
      </Link>
    </div>
  );
}

export default Logo;
