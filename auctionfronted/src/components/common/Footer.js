import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Typography,
  Grid,
  IconButton,
  Box,
  Container,
} from '@material-ui/core';
import { styles } from 'styles/FooterStyles';

import ArrowIcon from '@material-ui/icons/ArrowForwardIos';
import { footerInfo } from 'data';
// import { animateScroll as scroll } from 'react-scroll';
import Logo from './Logo';
import facebookIcon from 'assets/facebook.png';
import twitterIcon from 'assets/twitter.png';
import googleIcon from 'assets/google.png';

const Footer = () => {
  const history = useNavigate();
  const classes = styles();

  //   const handleClick = () => {
  //     scroll.scrollToTop({
  //       duration: 1500,
  //       delay: 100,
  //     });
  //   };

  return (
    <>
      <footer className={classes.root}>
        <Container>
          <Logo variant='h4' color='light' />
          <div className={classes.footer}>
            <div className={classes.footerItem}>
              <Typography variant='h5'>
                <Box sx={{ color: '#fff' }}>Disclosure</Box>
              </Typography>
              <Box my={1} sx={{ letterSpacing: 1, textAlign: 'justify' }}>
                <Typography variant='body1'>{footerInfo.decription}</Typography>
              </Box>
            </div>

            <div className={classes.footerItem}>
              <Typography variant='h5'>Contact Us</Typography>
              <Typography variant='body1'>
                Press & Media : {footerInfo.contactUs.pressEmail}
              </Typography>
              <Typography variant='body1'>
                Help & Support : {footerInfo.contactUs.helpEmail}
              </Typography>

              <Box
                display='flex'
                mt={3}
                sx={{
                  columnGap: 10,
                  '& img': {
                    width: 30,
                    height: 30,
                  },
                }}
              >
                <Link to='/'>
                  <img src={facebookIcon} alt='auction-facebook' />
                </Link>
                <Link to='/'>
                  <img src={twitterIcon} alt='auction-facebook' />
                </Link>
                <Link to='/'>
                  <img src={googleIcon} alt='auction-facebook' />
                </Link>
              </Box>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
