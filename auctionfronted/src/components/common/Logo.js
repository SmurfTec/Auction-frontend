import React from 'react';
import { ButtonBase, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LogoImg from 'assets/logo1.svg';

function Logo({ w, h, fontSize = '1.2rem', textColor = '#000' }) {
  return (
    <div id='logo'>
      <ButtonBase disableRipple component={Link} to='/'>
        <img src={LogoImg} width={w} height={h} alt='Logo' />
        <span
          style={{
            fontSize: fontSize,
            color: textColor,
            // fontFamily: "'Lobster', cursive",
          }}
        >
          Auction
        </span>
      </ButtonBase>
    </div>
  );
}

export default Logo;
