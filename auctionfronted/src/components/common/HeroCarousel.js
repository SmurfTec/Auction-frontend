import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import auctionmg from 'assets/auctionBanner.jpg';
import auctionHero from 'assets/auctionHero.jpg';
import { Box, makeStyles, Typography } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  heroCarousel: {
    position: 'relative',
    '& img': {
      maxHeight: 350,
      objectFit: 'cover',
    },
    '& span': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: `${theme.palette.primary.main}bf`,
    },
    '& .carousel .legend': {
      position: 'absolute',
      top: '50%',
      zIndex: 5,
      opacity: 1,
    },
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    position: 'absolute',
    top: '25%',
    width: '70%',
  },
}));
const HeroCarousel = () => {
  const classes = styles();
  return (
    <Carousel
      //   className={classes.Carousel}
      showArrows={true}
      showThumbs={false}
      animationHandler='fade'
      swipeable={false}
      showStatus={false}
      autoPlay={true}
      //   onChange={onChange}
      //   onClickItem={onClickItem}
      //   onClickThumb={onClickThumb}
      className={classes.heroCarousel}
    >
      <Box display='flex' justifyContent='center'>
        <img src={auctionHero} alt='Legend1' />
        <span />
        {/* <p className='legend'>Legend 1</p> */}
        <Typography variant='h2' className={classes.title}>
          Enhance your auction with online bidding
        </Typography>
      </Box>
      {/* <div>
        <img src={auctionHero} alt='Legend1' />

        <p className='legend'>Legend 2</p>
      </div> */}
      {/* <div>
        <img src={auctionmg} alt='Legend1' />

        <p className='legend'>Legend 3</p>
      </div>
      <div>
        <img src={auctionmg} alt='Legend1' />

        <p className='legend'>Legend 4</p>
      </div> */}
    </Carousel>
  );
};

export default HeroCarousel;
