import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import circle from 'assets/LotPot_circle.png';
import { Typography } from '@material-ui/core';

function Logo({ w, h, header = false }) {
  return (
    <div id='logo'>
      <Link component={Link} to='/'>
        {/* {comp === 'nav' ? (
          <img src={circle} width={w} height={h} alt='LotPot Auction' />
        ) : ( */}
        <img src={circle} width={w} height={h} alt='LotPot Auction' />
        {/* )} */}

        {header && (
          <Typography variant='subtitle2'>
            <Link to='/'>Home</Link>
          </Typography>
        )}
      </Link>
    </div>
  );
}

export default Logo;
