import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Typography, Box, Container, Button } from '@material-ui/core';
import { footerInfo } from 'data';
// import { animateScroll as scroll } from 'react-scroll';
import Logo from './Logo';
import facebookIcon from 'assets/facebook.png';
import twitterIcon from 'assets/twitter.png';
import googleIcon from 'assets/google.png';
import { styles } from 'styles/FooterStyles';

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
        {/* <Container> */}
        <div className={classes.footer}>
          <div className={classes.footerItem}>
            <Logo w={35} h={35} textColor='#fff' />
            <Box my={1} sx={{ letterSpacing: 1, textAlign: 'justify' }}>
              <Box my={1} sx={{ color: '#fff' }}>
                <Typography variant='h5'>Disclosure</Typography>
              </Box>
              <Typography variant='body1'>{footerInfo.decription}</Typography>
            </Box>
          </div>

          <div className={classes.footerItem}>
            <Button
              color='primary'
              variant='contained'
              onClick={() => history('/contact-us')}
              style={{ maxWidth: 170 }}
            >
              Contact Us
            </Button>

            <Box mt={2}>
              <Typography variant='body1'>
                {' '}
                for queries feel free to contact,
              </Typography>
              <Typography variant='body2'>
                Press & Media : {footerInfo.contactUs.pressEmail}
              </Typography>
              <Typography variant='body2'>
                Help & Support : {footerInfo.contactUs.helpEmail}
              </Typography>
            </Box>

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
        {/* </Container> */}
      </footer>
    </>
  );
};

export default Footer;
